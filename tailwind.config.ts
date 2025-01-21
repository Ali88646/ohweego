import { url } from "inspector";
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
        "white-text-color": "#FFFFFF",
        "gray-text-color": "#515151",
      },
      backgroundColor: {
        "main-bg-color": "#121212",
        "card-bg-color": "#181818",
        "primary-color": "#FF007A",
        "secondary-color": "#254AF7",
        "accent-color": "#FD7E40",
      },
      backgroundImage: {
        "gradient-bg-color":
          "linear-gradient(to left, #254AF7, #FF007A, #FD7E40)",
        "image-url": "url('/images/radial-bg.png')",
        "gradient-text-color": "linear-gradient(to left, #254AF7, #FF007A)",
        "devisor-bg": "linear-gradient(to top, #254AF7, #FF007A, #FD7E40)",
        "check-icon-bg": "linear-gradient(to right, #FF007A, #9200c7)",
      },
    },
  },
  plugins: [],
} satisfies Config;
