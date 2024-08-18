/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'symbols': ['popular-symbols']
      },
      colors: {
        'primary': '#0866FF',
        'primary-hover': '#1877f2',
        'success': '#00a400',
        'success-hover': '#36a420',
        'inactive': '#65676B'
      },
      boxShadow: {
        'auth': '0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)',
        'primary': '0 0 1px 2px rgba(88,144,255,0.75), 0 1px 1px rgba(0,0,0,0.15)',
        'success': '0 0 1px 2px rgba(88,255,91,0.75), 0 1px 1px rgba(0,0,0,0.15)',
        'card': '0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1)'
      },

      gridTemplateColumns: {
        'main-3': 'min-content 1fr min-content'
      },
      gridTemplateRows: {
        'main-2': 'min-content 1fr'
      },
    },
  },
  plugins: [],
}