import type { GlobalConfig } from 'payload'

export const PosterRail: GlobalConfig = {
  slug: 'posterRail',
  label: 'Poster Rail',
  access: { read: () => true },
  fields: [
    { name: 'topText', type: 'text', required: true, defaultValue: 'raoul.studio — Edition 2026' },
    {
      name: 'middleText',
      type: 'text',
      required: true,
      defaultValue: 'code · concept & engineering studio',
    },
    { name: 'bottomText', type: 'text', required: true, defaultValue: 'raoul.studio' },
  ],
}
