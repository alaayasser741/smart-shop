/* eslint linebreak-style: ["error", "windows"] */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-main': '#7fd3df',
        'color-alt': '#54a4af',
        'color-cyan-alt': '#93CADE',
      },
    },
  },
  plugins: [],
};
