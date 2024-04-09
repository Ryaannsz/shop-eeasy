import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-primary' : '#828282',
        'blue-hover' : '#2F4EAA'
      },
      maxWidth: {
        grid: '90rem'
      }
    },
  },
  plugins: [],
};
export default config;
