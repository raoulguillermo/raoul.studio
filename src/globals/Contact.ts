import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: { read: () => true },
  fields: [
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: "Let's talk — raoul.studio",
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Get in touch with raoul.studio.',
        },
      ],
    },
    { name: 'eyebrow', type: 'text', required: true, defaultValue: 'Get in touch' },
    {
      name: 'titleLine1',
      type: 'text',
      required: true,
      defaultValue: "Let's",
    },
    { name: 'titleLine2', type: 'text', required: true, defaultValue: 'talk' },
    { name: 'titleAccent', type: 'text', defaultValue: '.', admin: { description: 'Trailing accent character (red dot, etc.)' } },
    {
      name: 'lead',
      type: 'textarea',
      required: true,
      defaultValue:
        "Got an idea, a stuck project, or want a sanity check? Drop a line — I read every message and reply within 24 hours.",
    },
    {
      name: 'form',
      type: 'group',
      fields: [
        { name: 'nameLabel', type: 'text', defaultValue: 'Your name' },
        { name: 'namePlaceholder', type: 'text', defaultValue: 'Jane Doe' },
        { name: 'emailLabel', type: 'text', defaultValue: 'Email' },
        { name: 'emailPlaceholder', type: 'text', defaultValue: 'jane@company.com' },
        { name: 'companyLabel', type: 'text', defaultValue: 'Company / project' },
        { name: 'companyOptional', type: 'text', defaultValue: 'optional' },
        { name: 'companyPlaceholder', type: 'text', defaultValue: 'Acme Inc.' },
        { name: 'messageLabel', type: 'text', defaultValue: 'What are you working on?' },
        {
          name: 'messagePlaceholder',
          type: 'text',
          defaultValue:
            "A few sentences is enough — what you're building, what's stuck, what you want from me.",
        },
        { name: 'sendLabel', type: 'text', defaultValue: 'send message' },
        {
          name: 'recipient',
          type: 'text',
          required: true,
          defaultValue: 'hello@raoul.studio',
          admin: { description: 'Email address that the mailto: form sends to.' },
        },
      ],
    },
    {
      name: 'directContact',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Or write me directly' },
        { name: 'email', type: 'text', defaultValue: 'hello@raoul.studio' },
      ],
    },
    {
      name: 'posterRailMiddle',
      type: 'text',
      defaultValue: "Let's talk · Get in touch",
      admin: {
        description: 'Override for the vertical rail middle text on this page.',
      },
    },
  ],
}
