import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // For components
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // For other source files
  ],
};

export default config;
