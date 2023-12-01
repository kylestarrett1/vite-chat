/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin: '300',
        normal: '400',
        medium: '500',
        bold: '700',
        extrabold: '900',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
        'bg-light': '#525974',
        'bg-dark': '#262b3d',
        fg: '#191c28',
        'text-light': '#eeeef1',
        neon: '#ab20fd',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.9)',
        neon: '0 0 7px 0 rgba(172, 33, 253, 0.6)',
      },
    },
  },
  plugins: [],
};
