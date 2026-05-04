import type { GlobalConfig } from 'payload'

export const Menu: GlobalConfig = {
  slug: 'menu',
  access: { read: () => true },
  fields: [
    { name: 'eyebrow', type: 'text', required: true, defaultValue: 'Menu — 2026' },
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      labels: { singular: 'Column', plural: 'Columns' },
      fields: [
        { name: 'heading', type: 'text', required: true },
        {
          name: 'links',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    { name: 'footerLeft', type: 'text', defaultValue: '© raoul.studio · 2026' },
    { name: 'footerRightLabel', type: 'text', defaultValue: 'hello@raoul.studio' },
    { name: 'footerRightHref', type: 'text', defaultValue: 'mailto:hello@raoul.studio' },
  ],
}
