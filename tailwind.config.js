/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
      },
      fontFamily: {
        josefin: ["Josefin Sans"],
      },
    },
  },
  plugins: [scrollbarPlugin],
};
