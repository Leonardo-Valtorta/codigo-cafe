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
        'cafe': "#B46C3C",
        cafeLight: "#D6A367",
        navbarBackground: "#F5D48E",
        'logo': '#F58438',
        'verde': '#15605B',
        'negro':"#000000",
        'Btn-Agregar':'#7D526D',
        'Btn-Quitar': '#FFB7CD',
        'Btn-Eliminar-Todo':'#B3261E',
        navbarBackgroundSecond: "#f5c152",
        navbarBackgroundThird: "#edc368",

        /* Colores Shopping Cart */
        bgShoppingCart:"#D6A367",
        btnRemoveItem:"#FFB7CD",
        btnRemoveItemHover:"#F381A3",
        btnDeleteAll:"#B3261E",
        btnDeleteAllHover:"#830c06",
        Coffee: "#B46C3C",
        bgShoppingCard:"#D9D9D9",
        btnBuy:"#e67326",
        btnBuyAllHover:"#f76d11"
      },
      fontFamily: {
        navbar: ["Pompiere", "sans-serif"],
        titleCart:["Jockey One", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
