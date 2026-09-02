/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B192C',
          900: '#07111E',
          800: '#0B192C',
          700: '#122B47',
          600: '#1E3E62',
        },
        royal: {
          DEFAULT: '#1E56A0',
          600: '#1E56A0',
          500: '#2B6CB8',
          100: '#E7EFF9',
        },
        gold: {
          DEFAULT: '#C6972F',
          400: '#D4AF37',
          300: '#E4C86B',
          100: '#F7EFD8',
        },
        canvas: '#FAFAF8',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        overline: '0.22em',
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,25,44,0.04), 0 12px 32px -12px rgba(11,25,44,0.14)',
        lift: '0 24px 60px -24px rgba(11,25,44,0.32)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
