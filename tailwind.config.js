/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#13141f',
        'accent-primary': '#7b42f6',
        'accent-secondary': '#00d2ff',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        blob: "blob 20s infinite alternate",
        aurora: "aurora 30s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "33%": { transform: "scale(1.1) translate(30px, -50px)" },
          "66%": { transform: "scale(0.9) translate(-20px, 20px)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        }
      }
    },
  },
  plugins: [],
}
