/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        'footer-image': "url(../assets/img/Rectangle.png)",
      },
    },
  },
  plugins: [],
}

