/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'verde': "#15605B",
        'Btn-Agregar':"#7D526D",
        navbarBackground: "#F5D48E",
        navbarBackgroundSecond: "#f5c152",
        navbarBackgroundThird: "#edc368",
        cafe: "#D6A367",
      },
      fontFamily: {
        navbar: ["Pompiere", "sans-serif"],
        titleNosotros: ["Jockey One", "sans-serif"],
        bodyNosotros: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
