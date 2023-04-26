/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{html,js,tsx,ts}"],
  theme: {
    screens: {
      'lg-custom': '1100px',
      'md-custom': '910px',
    },
    extend: {},
  },
  plugins: [],
}


