/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#CA6C17",
        gray: "#BDBDBD",
      },
      width: {
        "7xl": "80rem",
      },
      screens: {
        'md-min': {
          min: "768px",
          // max: "869px",
        },
        'md-max': {
          max: "768px",
        }
      },
    },
  },
  plugins: [],
}
