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
  en: { eyebrow: 'Blog', lead: 'What new technology means for the businesses building with it.', sources: 'Sources', empty: 'No entries yet.', keyFacts: 'Key facts' },
  de: { eyebrow: 'Blog', lead: 'Was neue Technologie für Unternehmen bedeutet, die damit bauen.', sources: 'Quellen', empty: 'Noch keine Einträge.', keyFacts: 'Auf einen Blick' },
  nl: { eyebrow: 'Blog', lead: 'Wat nieuwe technologie betekent voor de bedrijven die ermee bouwen.', sources: 'Bronnen', empty: 'Nog geen berichten.', keyFacts: 'In het kort' },
  es: { eyebrow: 'Blog', lead: 'Lo que la nueva tecnología significa para las empresas que construyen con ella.', sources: 'Fuentes', empty: 'Aún no hay entradas.', keyFacts: 'Datos clave' },
  fr: { eyebrow: 'Blog', lead: 'Ce que les nouvelles technologies changent pour ceux qui bâtissent avec.', sources: 'Sources', empty: 'Aucune entrée pour le moment.', keyFacts: 'En bref' },
  ar: { eyebrow: 'المدوّنة', lead: 'ماذا تعني التقنيات الجديدة للأعمال التي تبني بها.', sources: 'المصادر', empty: 'لا توجد مقالات بعد.', keyFacts: 'حقائق سريعة' },
}

export function getBlogStrings(lang) {
  return BLOG_STRINGS[lang] || BLOG_STRINGS[DEFAULT_LOCALE]
}

// Content-pillar labels, localized. A post's `pillar` is a stable language-independent
// key; the label shown to readers is looked up here. Unknown/missing pillars render nothing.
export const PILLAR_LABELS = {
  en: { 'ai-in-practice': 'AI in Practice', 'industry-insights': 'Industry Insights', commerce: 'Commerce' },
  de: { 'ai-in-practice': 'KI in der Praxis', 'industry-insights': 'Brancheneinblicke', commerce: 'Commerce' },
  nl: { 'ai-in-practice': 'AI in de praktijk', 'industry-insights': 'Branche-inzichten', commerce: 'Commerce' },
  es: { 'ai-in-practice': 'IA en la práctica', 'industry-insights': 'Perspectivas del sector', commerce: 'Commerce' },
  fr: { 'ai-in-practice': 'IA en pratique', 'industry-insights': 'Perspectives du secteur', commerce: 'Commerce' },
  ar: { 'ai-in-practice': 'الذكاء الاصطناعي عمليًا', 'industry-insights': 'رؤى القطاع', commerce: 'التجارة' },
}

export function getPillarLabel(pillar, lang) {
  if (!pillar) return null
  const map = PILLAR_LABELS[lang] || PILLAR_LABELS[DEFAULT_LOCALE]
  return map[pillar] || PILLAR_LABELS[DEFAULT_LOCALE][pillar] || null
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
    pillar: post.pillar || null,
    sources: post.sources || [],
    title: loc.title ?? base.title ?? post.slug,
    summary: loc.summary ?? base.summary ?? '',
    body: loc.body ?? base.body ?? [],
    // Subtle visuals (both optional, both backward-compatible):
    //  - keyFacts: a small "facts" card, translated per locale.
    //  - image: a real source image, language-independent; shown only if present.
    keyFacts: loc.keyFacts ?? base.keyFacts ?? [],
    image: post.image || null,
  }
}

export function getPosts(lang) {
  return readAllRaw().map((p) => localize(p, lang))
}

export function getPost(slug, lang) {
  const post = readAllRaw().find((p) => p.slug === slug)
  return post ? localize(post, lang) : null
}
