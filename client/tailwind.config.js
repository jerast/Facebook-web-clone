/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'primary': '#0866FF',
        'primary-hover': '#1877f2',
        'success': '#00a400',
        'success-hover': '#36a420',
      },
      boxShadow: {
        'auth': '0 2px 4px rgba(0,0,0,.1), 0 8px 16px rgba(0,0,0,.1)',
        'primary': '0 0 1px 2px rgba(88,144,255,.75), 0 1px 1px rgba(0,0,0,.15)',
        'success': '0 0 1px 2px rgba(88,255,91,0.75), 0 1px 1px rgba(0,0,0,.15)',
      }
    },
  },
  plugins: [],
}
