/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
        backgroundImage: {
          'tick': "url('./src/stories/assets/checkbox-tick.svg')",
        },
    },
  },
  plugins: [],
}

