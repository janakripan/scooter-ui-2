/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        scooter:'#42454A'
      },
      fontFamily:{
          ubuntu:['Ubuntu', 'sans-serif'],
          calistoga:["Calistoga", "serif"],
      },
      boxShadow: {
        'square': '4px 4px 4px 4px rgba(0.15, 0.15, 0.15, 0.15)', // Customize values
        'custom-blur': '0 4px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}