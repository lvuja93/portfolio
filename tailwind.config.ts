import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class', '.dark'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg))',
        fg: 'rgb(var(--fg))',
        card: 'rgb(var(--card))',
        border: 'rgb(var(--border))',
        accent: 'rgb(var(--accent))',
        accent2: 'rgb(var(--accent2))',
      },
    },
  },
  plugins: [],
} satisfies Config;
