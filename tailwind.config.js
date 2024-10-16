/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0 4px 20px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 2px 10px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        josefin: ["Josefin Sans"],
      },
    },
  },
  plugins: [scrollbarPlugin],
};
