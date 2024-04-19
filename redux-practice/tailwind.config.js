/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main_image': "url('https://resonance3d.com/wp-content/uploads/2023/12/Untitled-design-1-2.png')",

      }
    },
  },
  plugins: [],
}

