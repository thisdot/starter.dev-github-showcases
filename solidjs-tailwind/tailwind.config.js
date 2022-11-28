/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", ],
  theme: {
    extend: {
      colors: {
        'primary': '#0969da',
        'primary-100': '#f6f8fa',
        'primary-200': '#ddf4ff',
        'primary-400': '#4078c0',
        'secondary': '#586069',
        'secondary-100': '#d0d7de',
        'secondary-200': '#57606a',
        'secondary-300': '#eaecef',
        'accent': '#6e5494',
        'success': '#2ea44f',
        'dark': '#111827',
        'dark-300': '#1b1f2414',
        'dark-800': '#24292f',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
