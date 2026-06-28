#!/usr/bin/env python3
"""Append the day's lead-email drafts into Gmail's Drafts folder over IMAP.

Reads one JSON draft per lead from a directory (each: {to, subject, body, ...})
and APPENDs it to the authenticated account's Drafts mailbox, so the drafts
appear in Gmail ready to review and send. Used by run.sh after the agent writes
the drafts; safe to re-run (it appends, so re-running creates duplicates — the
caller guards against that).

Credentials come from a KEY=VALUE file (default: ./.imap-credentials):
    GMAIL_USER=hello@raoul.studio
    GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx   # a Google App Password, not the login

Usage:  append_to_gmail.py <drafts_dir> [credentials_file]
Exit:   0 if every draft was appended; 1 on any failure.
"""

import sys
import os
import re
import json
import time
import imaplib
from email.message import EmailMessage
from email.utils import formataddr

IMAP_HOST = "imap.gmail.com"
IMAP_PORT = 993
FROM_NAME = "Raoul Guillermo"


def load_credentials(path):
    creds = {}
    with open(path, "r", encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, val = line.partition("=")
            creds[key.strip()] = val.strip().strip('"').strip("'")
    user = creds.get("GMAIL_USER")
    pw = creds.get("GMAIL_APP_PASSWORD")
    if not user or not pw:
        sys.exit(f"FATAL: {path} must define GMAIL_USER and GMAIL_APP_PASSWORD")
    return user, pw


def find_drafts_mailbox(imap):
    """Return the IMAP name of the Drafts mailbox (special-use \\Drafts), with
    sensible fallbacks for Gmail."""
    typ, data = imap.list()
    if typ == "OK":
        for raw in data:
            line = raw.decode(errors="replace") if isinstance(raw, bytes) else str(raw)
            if "\\Drafts" in line:
                # mailbox name is the last quoted token on the line
                m = re.search(r'"([^"]+)"\s*$', line)
                if m:
                    return m.group(1)
                return line.split()[-1].strip('"')
    return "[Gmail]/Drafts"


def build_message(user, draft):
    msg = EmailMessage()
    msg["From"] = formataddr((FROM_NAME, user))
    msg["To"] = draft["to"]
    msg["Subject"] = draft.get("subject", "")
    msg.set_content(draft.get("body", ""))
    return msg


def main():
    if len(sys.argv) < 2:
        sys.exit("Usage: append_to_gmail.py <drafts_dir> [credentials_file]")
    drafts_dir = sys.argv[1]
    here = os.path.dirname(os.path.abspath(__file__))
    creds_file = sys.argv[2] if len(sys.argv) > 2 else os.path.join(here, ".imap-credentials")

    user, pw = load_credentials(creds_file)

    files = sorted(f for f in os.listdir(drafts_dir) if f.endswith(".json"))
    if not files:
        sys.exit(f"No .json drafts found in {drafts_dir}")

    imap = imaplib.IMAP4_SSL(IMAP_HOST, IMAP_PORT)
    try:
        imap.login(user, pw)
    except imaplib.IMAP4.error as exc:
        sys.exit(f"FATAL: IMAP login failed for {user}: {exc}")

    mailbox = find_drafts_mailbox(imap)
    print(f"Appending {len(files)} draft(s) to '{mailbox}' for {user}")

    failures = 0
    for name in files:
        path = os.path.join(drafts_dir, name)
        try:
            with open(path, "r", encoding="utf-8") as fh:
                draft = json.load(fh)
            if not draft.get("to") or not draft.get("subject"):
                raise ValueError("draft missing 'to' or 'subject'")
            msg = build_message(user, draft)
            typ, resp = imap.append(
                mailbox, "\\Draft", imaplib.Time2Internaldate(time.time()), msg.as_bytes()
            )
            if typ != "OK":
                raise RuntimeError(f"APPEND returned {typ}: {resp}")
            print(f"  OK   {name} -> {draft['to']}")
        except Exception as exc:  # noqa: BLE001 - report and continue
            failures += 1
            print(f"  FAIL {name}: {exc}")

    try:
        imap.logout()
    except Exception:
        pass

    if failures:
        sys.exit(f"{failures} draft(s) failed to append")
    print("All drafts appended to Gmail.")


if __name__ == "__main__":
    main()
