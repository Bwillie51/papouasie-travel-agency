/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#E5A922",       // Gold accent from your logo
          goldHover: "#C99218",  // Hover weight
          charcoal: "#0D0F12",   // Deep base canvas tone
        },
      },
    },
  },
  plugins: [],
};
