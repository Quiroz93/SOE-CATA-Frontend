module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sena: {
          green: '#39A900', // institucional
          dark: '#1C1C1C',  // institucional
          gray: '#6B7280',  // institucional
        },
      },
      fontFamily: {
        sena: ['Montserrat', 'sans-serif'],
        // Mantener otras familias si existen
      },
    },
  },
  plugins: [],
};