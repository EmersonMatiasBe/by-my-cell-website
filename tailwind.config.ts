import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './_pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          50: '#e5f5e9',
          100: '#c0e7c9',
          200: '#97d7a7',
          300: '#6ac884',
          400: '#43bc6a',
          500: '#00b04f',
          600: '#00a146',
          700: '#008f3a',
          800: '#007e2f',
          900: '#005f1a'
        },
        secondary: {
          50: '#e6e9ef',
          100: '#c0c9d9',
          200: '#98a6bf',
          300: '#7183a5',
          400: '#546994',
          500: '#355184',
          600: '#2e497c',
          700: '#264071',
          800: '#203764',
          900: '#17274c'
        }
      },
      keyframes: {
        animateCustomers: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-4000px)' }
        },
        animatePartners: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-2900px)' }
        },
        orbit: {
          '0%': { transform: 'rotate(-90deg)  translateX(200px)' },
          '100%': {
            transform: 'rotate(270deg) translateX(200px) '
          }
        }
      },
      animation: {
        slider: 'animateCustomers 15s linear infinite',
        sliderPartners: 'animatePartners 15s linear infinite',
        orbit: 'orbit 4s linear infinite'
      }
    }
  }
}
export default config
