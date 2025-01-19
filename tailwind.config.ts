import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg-color": "#121212",
        "card-bg-color": "#181818",
        "primary-color": "#FF007A",
        "secondary-color": "#254AF7",
        "acccent-color": "#FD7E40",
        "white-text-color": "#FFFFFF",
        "gray-text-color": "#515151",
      },
      backgroundImage: {
        "gradient-bg-color":
          "linear-gradient(to left, ##254AF7, #FF007A, #FD7E40)",
        "radial-bg-color":
          "radial-gradient(circle at center, #FF007A, #121212,#121212)",
      },
    },
  },
  plugins: [],
} satisfies Config;
