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
        hover:"var(--color-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
