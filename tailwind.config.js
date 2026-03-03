/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
      },
      borderRadius: {
        'md': '0.5rem',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}

