import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: { read: () => true },
  admin: {
    useAsTitle: 'titleLine1',
    defaultColumns: ['titleLine1', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'URL slug, e.g. "about" → /about' },
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
    { name: 'eyebrow', type: 'text', required: true },
    { name: 'titleLine1', type: 'text', required: true },
    {
      name: 'titleAccent',
      type: 'text',
      admin: { description: 'Trailing accent character (red dot, etc.)' },
    },
    {
      name: 'lead',
      type: 'textarea',
      admin: {
        description: 'Optional opening paragraph displayed below the title.',
      },
    },
    {
      name: 'intro',
      type: 'array',
      labels: { singular: 'Paragraph', plural: 'Intro paragraphs' },
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    { name: 'servicesLabel', type: 'text' },
    {
      name: 'services',
      type: 'array',
      labels: { singular: 'Service', plural: 'Services' },
      fields: [{ name: 'label', type: 'text', required: true }],
    },
    { name: 'systemsParagraph', type: 'textarea' },
    {
      name: 'steps',
      type: 'array',
      labels: { singular: 'Step', plural: 'Steps' },
      admin: {
        description:
          'Numbered process steps. Numbers are generated automatically (01, 02, …).',
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'lead', type: 'textarea', required: true },
        {
          name: 'body',
          type: 'array',
          labels: { singular: 'Paragraph', plural: 'Body paragraphs' },
          fields: [{ name: 'text', type: 'textarea', required: true }],
        },
      ],
    },
    {
      name: 'howWeWork',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'lead', type: 'textarea' },
        {
          name: 'points',
          type: 'array',
          labels: { singular: 'Point', plural: 'Points' },
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'closing', type: 'textarea' },
      ],
    },
    { name: 'manifestoLead', type: 'textarea' },
    { name: 'manifestoTail', type: 'textarea' },
    {
      name: 'posterRailMiddle',
      type: 'text',
      admin: {
        description: 'Override for the vertical rail middle text on this page.',
      },
    },
  ],
}
