import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: { read: () => true },
  admin: {
    useAsTitle: 'titlePlain',
    defaultColumns: ['number', 'titlePlain', 'year', 'slug'],
    listSearchableFields: ['titlePlain', 'slug'],
  },
  defaultSort: 'number',
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'URL slug. e.g. "booking" → /projects/booking' },
    },
    {
      name: 'number',
      type: 'number',
      required: true,
      min: 1,
      admin: { description: 'Display order (1, 2, 3, …) — also rendered as "Project № 0X".' },
    },
    { name: 'year', type: 'text', required: true, admin: { description: 'e.g. 2024' } },
    {
      name: 'titlePlain',
      type: 'text',
      required: true,
      admin: { description: 'Plain-text title used for tabs, rail, prev/next links.' },
    },
    {
      name: 'titleLine1',
      type: 'text',
      required: true,
      admin: { description: 'First line of the big stacked title.' },
    },
    {
      name: 'titleLine2',
      type: 'text',
      admin: { description: 'Optional second line.' },
    },
    {
      name: 'titleLine2Color',
      type: 'text',
      admin: {
        description:
          'Optional CSS color applied to the second line (e.g. #E92316). Leave blank to inherit the section text color.',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      admin: { description: 'Used on the home-page teaser.' },
    },
    {
      name: 'lead',
      type: 'textarea',
      required: true,
      admin: { description: 'Lead paragraph at the top of the project detail page.' },
    },
    {
      name: 'tagsLine',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "Web · Payments · Calendar · Stripe" — bottom of teaser.' },
    },
    {
      name: 'shortTag',
      type: 'text',
      required: true,
      admin: { description: 'Compact tag used in the home Selected Work list, e.g. "web, payments".' },
    },
    {
      name: 'colors',
      type: 'group',
      label: 'Colors',
      fields: [
        { name: 'bg', type: 'text', required: true, defaultValue: '#E92316' },
        { name: 'fg', type: 'text', required: true, defaultValue: '#D6D9DC' },
        {
          name: 'numeralColor',
          type: 'text',
          admin: { description: 'Override color for the giant background numeral. Leave blank to use fg.' },
        },
        {
          name: 'numeralOpacity',
          type: 'number',
          required: true,
          defaultValue: 0.1,
          min: 0,
          max: 1,
          admin: { step: 0.01 },
        },
      ],
    },
    {
      name: 'info',
      type: 'array',
      labels: { singular: 'Info row', plural: 'Info rows' },
      admin: { description: 'Role / Stack / Status grid on the project detail page.' },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'body',
      type: 'array',
      labels: { singular: 'Paragraph', plural: 'Paragraphs' },
      admin: { description: 'Body paragraphs on the project detail page.' },
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
  ],
}
