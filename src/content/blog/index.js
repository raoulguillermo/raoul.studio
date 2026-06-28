// Server-only blog loader.
//
// Posts are plain JSON files in ./posts, one per day, written by the daily
// agent (see scripts/daily-blog/). They are read from disk at REQUEST time so a
// freshly published file goes live without a rebuild — the /blog routes are
// `force-dynamic`. Never import this from a client component (it uses node:fs).

import fs from 'node:fs'
import path from 'node:path'

import { DEFAULT_LOCALE } from '../i18n'

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog/posts')

// Localized chrome for the blog pages. Falls back to English per locale.
export const BLOG_STRINGS = {
  en: { eyebrow: 'Blog', lead: 'Daily notes on AI & technology.', sources: 'Sources', empty: 'No entries yet.' },
  de: { eyebrow: 'Blog', lead: 'Tägliche Notizen zu KI & Technologie.', sources: 'Quellen', empty: 'Noch keine Einträge.' },
  nl: { eyebrow: 'Blog', lead: 'Dagelijkse notities over AI & technologie.', sources: 'Bronnen', empty: 'Nog geen berichten.' },
  es: { eyebrow: 'Blog', lead: 'Notas diarias sobre IA y tecnología.', sources: 'Fuentes', empty: 'Aún no hay entradas.' },
  fr: { eyebrow: 'Blog', lead: 'Notes quotidiennes sur l’IA et la technologie.', sources: 'Sources', empty: 'Aucune entrée pour le moment.' },
  ar: { eyebrow: 'المدوّنة', lead: 'ملاحظات يومية حول الذكاء الاصطناعي والتقنية.', sources: 'المصادر', empty: 'لا توجد مقالات بعد.' },
}

export function getBlogStrings(lang) {
  return BLOG_STRINGS[lang] || BLOG_STRINGS[DEFAULT_LOCALE]
}

// Read + parse every post file. Bad/partial files are skipped, never thrown —
// one malformed entry must not take down the whole index.
function readAllRaw() {
  let files = []
  try {
    files = fs.readdirSync(POSTS_DIR)
  } catch {
    return [] // posts dir not created yet
  }
  const posts = []
  for (const file of files) {
    if (!file.endsWith('.json')) continue
    try {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
      const data = JSON.parse(raw)
      if (data && data.slug && data.date && data.locales) posts.push(data)
    } catch {
      // skip unreadable / invalid JSON
    }
  }
  // Newest first; tie-break on slug for stable ordering.
  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug < b.slug ? 1 : -1))
  return posts
}

// Merge a post's per-locale text onto the English base, field by field, so a
// missing translation falls back to English rather than rendering blank.
function localize(post, lang) {
  const base = post.locales[DEFAULT_LOCALE] || {}
  const loc = post.locales[lang] || {}
  return {
    slug: post.slug,
    date: post.date,
    tags: post.tags || [],
    sources: post.sources || [],
    title: loc.title ?? base.title ?? post.slug,
    summary: loc.summary ?? base.summary ?? '',
    body: loc.body ?? base.body ?? [],
  }
}

export function getPosts(lang) {
  return readAllRaw().map((p) => localize(p, lang))
}

export function getPost(slug, lang) {
  const post = readAllRaw().find((p) => p.slug === slug)
  return post ? localize(post, lang) : null
}
