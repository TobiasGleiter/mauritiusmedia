import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          100: '#D7F2B3',
          200: '#CFECA8',
          300: '#BBE387',
          400: '#ABDB6B',
          500: '#8CC63F',
          600: '#76B522',
          700: '#61A506',
          800: '#599804',
          900: '#487A06',
        },
        secondary: {
          100: '#E7E7E7',
          200: '#D7D7D7',
          300: '#CDCDCD',
          400: '#C5C5C5',
          500: '#B5B5B4',
          600: '#939393',
          700: '#676767',
          800: '#4E4E4E',
          900: '#3C3C3C',
        },
        danger: {
          100: '#FFD3D5',
          500: '#D83D41',
        },
        warning: {
          100: '#FFE8B6',
          500: '#FDB20E',
        },
      },
    },
  },
  plugins: [],
};
export default config;
