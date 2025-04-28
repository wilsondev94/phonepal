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
        background: "var(--background)",
        foreground: "var(--foreground)",

        brand: {
          primary: "#9C27B0",
          secondary: "#F3E5F5",

          "color-shade-1": "#D5B0DB",
          "color-shade-2": "#F2EEF3",

          "white-1": "#FEFAFA",
          "white-2": "#F1EFF2",

          "gray-1": "##D9D9D9",
          "gray-2": "#D3D3D3",

          green: "#04D029",
        },

        "user-chat": "#E5EAF2",

        "top-product-1": "#76037C",
        "top-product-2": "#A20857",
      },
    },
  },
  plugins: [],
} satisfies Config;
