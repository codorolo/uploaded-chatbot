/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-white': 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        'grid-pattern': 'repeating-linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px 30px), repeating-linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px 30px)',
      },
    },
  },
  plugins: [],
};