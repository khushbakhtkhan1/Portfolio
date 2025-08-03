/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class strategy for dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#703AC0',
        secondary: '#2C0354',
        dark: '#1A1A1A',
        light: '#F4F6FB',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: { color: theme('colors.primary'), '&:hover': { opacity: 0.8 } },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: { color: theme('colors.primary') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
