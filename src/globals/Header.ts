import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: { read: () => true },
  fields: [
    { name: 'wordmark', type: 'text', required: true, defaultValue: 'raoul.studio' },
    { name: 'wordmarkHref', type: 'text', required: true, defaultValue: '/' },
    { name: 'ctaLabel', type: 'text', required: true, defaultValue: "let's talk" },
    { name: 'ctaHref', type: 'text', required: true, defaultValue: '/contact' },
  ],
}
