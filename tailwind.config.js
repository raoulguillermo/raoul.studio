/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/(frontend)/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#D6D9DC',
        ink: '#0F0F0F',
        mute: '#65696C',
        accent: '#E92316',
        acid: '#E92316',
      },
      fontFamily: {
        display: ['Anton', '"Inter Tight"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        crush: '-0.04em',
        tight2: '-0.02em',
      },
    },
  },
  plugins: [],
}

export default config
