/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "tick-mark": "url('./assets/images/TickMark.svg')",
      },
      colors: {
        "custom-purple": "#796bfa",
        "custom-grey": "#545251",
      },
    },
    borderWidth: {
      6: "6px",
    },
    plugins: [],
  },
};
