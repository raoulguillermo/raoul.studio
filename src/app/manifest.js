export default function manifest() {
  return {
    name: 'raoul.studio',
    short_name: 'raoul.studio',
    description:
      'A product & engineering studio building custom-made, hand-tailored software for fintech, law and commercial teams.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F0F0F',
    theme_color: '#0F0F0F',
    icons: [
      {
        src: '/icon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
  }
}
