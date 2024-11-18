import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#1f2937',
        'color-border': '#e5e7eb',
        'color-link': '#000084',
      },
      boxShadow: {
        'default': '0 0 6px 2px #00000030',
      },
    },
  },
  plugins: [],
} satisfies Config;
