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
      colors:{
        textWhite:"#FAFAFA",
        lightGray:"#F5F5F5"
      },
      fontWeight:{
        '400':"400",
        '500':"500",
        '600':"600",
        '700':"700",
        '800':"800",
      }
    },
  },
  plugins: [],
};
export default config;
