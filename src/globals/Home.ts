import type { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  access: { read: () => true },
  fields: [
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'raoul.studio — design + engineering studio',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'raoul.studio is a small product studio. We design and build web software, platforms and tools for teams that ship.',
        },
      ],
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'prefix', type: 'text', required: true, defaultValue: 'I build and automate' },
        { name: 'accent', type: 'text', required: true, defaultValue: 'digital systems' },
        {
          name: 'suffix',
          type: 'text',
          required: true,
          defaultValue: 'for people who would rather ship than meet.',
        },
      ],
    },
    {
      name: 'intro',
      type: 'textarea',
      required: true,
      defaultValue:
        'raoul.studio is a small product studio designing, engineering and shipping web software, platforms and tools — booking systems, e-commerce stacks, internal dashboards, automations. AI is part of the toolkit when it earns its keep. Days and weeks, not quarters.',
    },
    {
      name: 'selectedWorkLabel',
      type: 'text',
      required: true,
      defaultValue: 'Selected work',
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          required: true,
          defaultValue: 'Got an idea or a stuck project?',
        },
        {
          name: 'beforeLink',
          type: 'text',
          required: true,
          defaultValue: 'Write to ',
        },
        {
          name: 'linkLabel',
          type: 'text',
          required: true,
          defaultValue: 'hello@raoul.studio',
        },
        {
          name: 'linkHref',
          type: 'text',
          required: true,
          defaultValue: 'mailto:hello@raoul.studio',
        },
        {
          name: 'afterLink',
          type: 'text',
          required: true,
          defaultValue: ".\nA straight answer back on whether it's worth building.",
          admin: {
            description:
              'Use a literal "\\n" in this field to insert a desktop-only line break (rendered as <br class="hidden md:block">).',
          },
        },
      ],
    },
  ],
}
