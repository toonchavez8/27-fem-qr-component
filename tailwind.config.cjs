/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'slate-300': 'hsl(212, 45%, 89%)',
        'slate-500': 'hsl(216, 15%, 48%)',
        'slate-900': 'hsl(218, 44%, 22%)'
      },
      fontFamily: {
        outfit: ['Outfit', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      }
    }
  },
  plugins: []
};
