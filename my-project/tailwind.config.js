/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#4da6ff",  // warna biru custom
        secondary: "#ff6b6b", // warna merah custom
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"], // font sesuai project Anda
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        spinSlow: "spinSlow 3s linear infinite",
      },
      boxShadow: {
        glow: "0 0 15px rgba(77,166,255,0.5)",
      },
      borderRadius: {
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
