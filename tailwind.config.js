/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  variants: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'Karla'],
        display: ['Rubik', 'sans-serif'],
        body: ['Karla', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        display: ['Arial', 'sans-serif'],
        body: ['Arial', 'sans-serif'],
        script: ['Pacifico', 'cursive']
      },
      colors: {
        'ss-orange-100': '#ff9100',
        'ss-orange-80': '#ffb738',
        'ss-orange-50': '#ffcd80',
        'ss-orange-20': '#ffe6c6',
        'ss-charcoal-100': '#2b2d35',
        'ss-charcoal-80': '#494c54',
        'ss-charcoal-30': '#a8aab0',
        'ss-charcoal-10': '#d6d7d9',
        'ss-teal': '#08997f',
        'ss-red': '#ff4e0d',
        'ss-turquoise': '#0bf1c7',
        'ss-dark-orange': '#d76900',
      },
    },
  },
};
