// tailwind.config.js
export default {
  darkMode: 'class', // или 'media'
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        text: 'var(--font-color)',
      },
    },
  },
  plugins: [],
}
