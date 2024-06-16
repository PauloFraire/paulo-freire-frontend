/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        Teal: "#336846",
        HummingBird: "#d1f1ee",
        Yellow: "#e4d63b",
        Solitude: "#e9e9ea",

        Naranja: "#EC8F36",
        Cafe: "#C89768",
        Rojo: "#ED3E37"
      },
      animation: {
        slide: "slide 25s linear infinite",
        fade: "fade-in-out 2s ease-in-out infinite"
      },
      keyframes: {
        // slide: {
        //   "0%,100%": { transform: "translateX(5%)" },
        //   "50%": { transform: "translateX(-120%)" }
        // },
        fade: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
    plugins: [],
  }

}