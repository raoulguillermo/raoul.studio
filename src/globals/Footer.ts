import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: { read: () => true },
  fields: [
    { name: 'leftText', type: 'text', required: true, defaultValue: '© 2026 raoul.studio' },
    { name: 'rightText', type: 'text', required: true, defaultValue: 'EU · Remote' },
  ],
}
