/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Rubik", "sans-serif"],
      },
    }
  },
  plugins: []
};
