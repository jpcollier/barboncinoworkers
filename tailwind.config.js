/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html",
  "./about.html"],
  content: [
    "./index.html",
    "./about.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {},
  },
  plugins: [],
}

