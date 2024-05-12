/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backdropBlur: {
        "4xl": "75px",
      },
      colors: {
        /* PRIMARY COLOR */
        primary1: "#fff",
        primary2: "#363738",
        /* SECONDARY COLOR */
        secondary1: "#f5f5f5",
        secondary2: "#fefaf1",
        secondary3: "#db4444",

        /* BACKGROUND COLOR */
        background: "#ffff",

        /* TEXT COLOR */
        text1: "#fafafa",
        text2: "#7d8184",
        text3: "#000000",
        textButton: "#000000",
        textCard: "#000000",

        /* BUTTON COLOR */
        button1: "#00ff66",
        button2: "#db4444",
        buttonHover1: "#e07575",
        buttonHover2: "#a0bce0",
      },
    },
  },
};
