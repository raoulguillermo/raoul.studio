// Standalone root layout for the admin area. It deliberately does NOT share the
// public site's layout (no nav, no menu, no tracking beacon) — this is an
// internal tool. App Router supports multiple root layouts as long as there is
// no top-level app/layout file; the public site lives under (frontend).

export const metadata = {
  title: 'Analytics — raoul.studio',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: '#0F0F0F',
          color: '#D6D9DC',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {children}
      </body>
    </html>
  )
}
