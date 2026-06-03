import { projectSlugs } from '@/content/projects'

const BASE_URL = 'https://raoul.studio'

export default function sitemap() {
  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/process', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
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

  return [...staticRoutes, ...projectRoutes]
}
