import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textWhite: "#FAFAFA",
        lightGray: "#F5F5F5",
      },
      fontWeight: {
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
      },
    },
    screens: {
      tab: "640px",
      // => @media (min-width: 640px) { ... }

      "tab-lg": "769px",
      // => @media (min-width: 768px) { ... }

      des: "1025px",
      // => @media (min-width: 1024px) { ... }

      "des-md": "1280px",
      // => @media (min-width: 1280px) { ... }

      "des-lg": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
