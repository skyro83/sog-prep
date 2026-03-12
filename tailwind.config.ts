import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f7f4ef',
        surface: '#ffffff',
        card: '#fdfcfa',
        border: '#e8e2d9',
        accent: '#c8402a',
        accent2: '#2a6b3f',
        accent3: '#1a4a7a',
        text: '#1a1714',
        muted: '#7a7068',
        light: '#f0ebe2',
        warn: '#d4790a',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
