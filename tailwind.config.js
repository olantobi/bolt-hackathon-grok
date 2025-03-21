/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hackathon': ['Orbitron', 'sans-serif'], // A futuristic font
      },
      colors: {
        neonPink: '#FF00FF',
        neonBlue: '#00FFFF',
        darkBg: '#0A0A23',
      },
    },
  },
  plugins: [],
}