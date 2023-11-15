/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Roboto',
        body: 'Cutive Mono',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
    daisyui: {
      themes: [
        {
          light: {
            primary: '#1ad129',
            secondary: '#bcf6c1',
            accent: '#097714',
            text: '#062809',
            background: '#f6fef7',
            info: '#0082ff',
            success: '#097714',
            warning: '#f3ad00',
            error: '#ff739e',
          },
          dark: {
            primary: '#2ee53d',
            secondary: '#09430e',
            accent: '#88f693',
            text: '#d7f9da',
            background: '#010902',
            info: '#0082ff',
            success: '#2ee53d',
            warning: '#f3ad00',
            error: '#ff739e',
          },
        },
      ],
      darkTheme: 'dark',
      utils: true,
      root: '#mainLayout',
    },
  },
  plugins: [require('daisyui')],
}
