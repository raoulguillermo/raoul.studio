import { projectSlugs } from '@/content/en/projects'
import { productSlugs, voiceIndustrySlugs } from '@/content/products'
import { LOCALES } from '@/content/i18n'

const BASE_URL = 'https://raoul.studio'

export default function sitemap() {
  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/software', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/process', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/poofy-events', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.6, changeFrequency: 'daily' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ].map((r) => ({
    url: `${BASE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const productRoutes = productSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const industryRoutes = voiceIndustrySlugs.map((slug) => ({
    url: `${BASE_URL}/voice-ai/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Every page also exists under each language prefix (/nl/voice-ai …). List
  // each version, all pointing at one another, with the plain URL as x-default.
  return [...staticRoutes, ...productRoutes, ...industryRoutes, ...projectRoutes].flatMap((entry) => {
    const path = entry.url.slice(BASE_URL.length)
    const clean = path === '/' ? '' : path
    const languages = Object.fromEntries(
      LOCALES.map((l) => [l, `${BASE_URL}/${l}${clean}`]),
    )
    languages['x-default'] = entry.url
    const alternates = { languages }
    return [
      { ...entry, alternates },
      ...LOCALES.map((l) => ({ ...entry, url: `${BASE_URL}/${l}${clean}`, alternates })),
    ]
  })
}
