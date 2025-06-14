import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          primary: "#9C27B0",
          secondary: "#F3E5F5",
          "color-shade-1": "#F2EEF3",
          "color-shade-2": "#f4d4fc",
          "color-shade-3": "#E9B3F2",
          "color-shade-4": "#E9B3F5",
          "color-shade-5": "#D5B0DB",
          "white-1": "#FEFAFA",
          "white-2": "#F1EFF2",
          "white-3": "#d1d1d1",
          "black-1": "#2F2E2E",
          "black-2": "#333333",
          "grey-1": "#D9D9D9",
          "grey-2": "#D3D3D3",
          "grey-3": "#797474",
          green: "#04D029",
        },
        "user-chat": "#E5EAF2",
        "top-product-1": "#76037C",
        "top-product-2": "#A20857",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "fade-in-scale": "fadeInScale 0.3s ease-out",
      },
    },
    plugins: [tailwindcssAnimate],
  },
} satisfies Config;
