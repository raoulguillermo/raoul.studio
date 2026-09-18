// Locale-aware content accessor.
//
// getContent(lang) returns the full content bundle for a locale. Any field a
// locale hasn't translated falls back to English, and project case studies are
// built by merging each locale's per-slug text overrides onto the single
// English base structure — so slugs, numbers and colors never drift. The base
// list is already ordered by project number (01 first), so every locale lists
// projects the same way.

import * as en from './en'
import * as de from './de'
import * as nl from './nl'
import * as es from './es'
import * as fr from './fr'
import * as ar from './ar'

import { projectsInOrder as baseProjects } from './en/projects'
import { DEFAULT_LOCALE } from './i18n'

const DICTS = { en, de, nl, es, fr, ar }

const PROJECT_SLUGS = baseProjects.map((p) => p.slug)

function mergeProjects(overrides) {
  if (!overrides) return baseProjects
  return baseProjects.map((p) => {
    const o = overrides[p.slug]
    if (!o) return p
    // info rows are positional: overlay translated label/value per index.
    const info = (p.info ?? []).map((row, i) => ({ ...row, ...(o.info?.[i] ?? {}) }))
    // downloads: locales translate the labels, the href stays on the base.
    const download = p.download || o.download ? { ...p.download, ...o.download } : undefined
    return { ...p, ...o, info, ...(download ? { download } : {}) }
  })
}

export function getContent(lang) {
  const dict = DICTS[lang] || DICTS[DEFAULT_LOCALE]
  const base = DICTS[DEFAULT_LOCALE]
  const pick = (key) => (dict[key] !== undefined ? dict[key] : base[key])

  const projects = mergeProjects(dict.projectOverrides)

  return {
    home: pick('home'),
    header: pick('header'),
    menu: pick('menu'),
    ui: pick('ui'),
    posterRail: pick('posterRail'),
    footer: pick('footer'),
    pages: pick('pages'),
    contact: pick('contact'),
    infographics: pick('infographics'),
    // Landing pages: a locale may translate some products and not others, so
    // fall back per product rather than for the whole dict.
    products: { ...base.products, ...(dict.products ?? {}) },
    productUi: pick('productUi'),
    projects,
    projectSlugs: PROJECT_SLUGS,
    getProject: (slug) => projects.find((p) => p.slug === slug),
  }
}
