import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kodeMono: ["var(--kodeMono)"],
        inter: ["var(--inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'feedback': "var(--feedback-img)",
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-darker": "var(--color-primary-darker)",
        "primary-darkest": "var(--color-primary-darkest)",
        "primary-light": "var(--color-primary-light)",
        "primary-lighter": "var(--color-primary-lighter)",
        "primary-lightest": "var(--color-primary-lightest)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        "secondary-darker": "var(--color-secondary-darker)",
        "secondary-darkest": "var(--color-secondary-darkest)",
        "secondary-light": "var(--color-secondary-light)",
        "secondary-lighter": "var(--color-secondary-lighter)",
        "secondary-lightest": "var(--color-secondary-lightest)",
        "primary-bg": "var(--color-primary-bg)",
        "secondary-bg": "var(--color-secondary-bg)",
        "primary-bg2": "var(--color-primary-bg2)",
        "secondary-bg2": "var(--color-secondary-bg2)",
        "primary-bg3": "var(--color-primary-bg3)",
        "secondary-bg3": "var(--color-secondary-bg3)",
        "primary-bg4": "var(--color-primary-bg4)",
        "secondary-bg4": "var(--color-secondary-bg4)",
        "white-bg":"var(--color-white-bg)",
        "hover-white-bg":"var(--color-hover-white-bg)",
        "dark-bg":"var(--color-dark-bg)",
        "dark-hover-bg":"var(--color-hover-dark-bg)",
        hover:"var(--color-hover)",
      },
      keyframes: {
        specially: {
          '0%':{opacity:'0',transform:"scale(0.90) rotate(20deg)"},
          '25%': { opacity:'0.5',transform:"scale(0.95) rotate(15deg)" },
          '50%': { opacity:'0.7',transform:"scale(1) rotate(10deg)" },
          '75%': { opacity:'0.9',transform:"scale(1.03) rotate(5deg)" },
          '100%': { opacity:'1',transform:"scale(1) " },
        }
      },
      animation: {
        'specially': 'specially 0.7s linear  1',
      }
    },
  },
  plugins: [],
};
export default config;
