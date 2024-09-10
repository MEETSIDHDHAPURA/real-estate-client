module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about-section": "url('/media/avatars/about_image_1.jpg')",
      },
      height: {
        "500": "500px",
      },
      width: {
        "85": "350px",
      },
      colors: {
        "primary": "rgb(var(--primary-color))",
        "primary-light": "rgba(var(--primary-color)/.1)",
        "secoundary": "var(--secondary-color)",
        "dark": "var(--color-dark)",
        "light": "var(--color-light)",
        "grey": {
          "100": "#d3d3d3",
          "200": "#e5e2e2",
          "300": "#898a9c",
        },
        transparentLight: {
          default: "rgb(255,255,255)",
          "100": "rgba(255,255,255,.1)",
          "200": "rgba(255,255,255,.2)",
          "300": "rgba(255,255,255,.3)",
          "400": "rgba(255,255,255,.4)",
          "500": "rgba(255,255,255,.5)",
          "600": "rgba(255,255,255,.6)",
          "800": "rgba(255,255,255,.8)",
        },
        transparentDark: {
          "50": "rgba(0,0,0,.05)",
          "100": "rgba(0,0,0,.1)",
          "200": "rgba(0,0,0,.2)",
          "300": "rgba(0,0,0,.3)",
          "400": "rgba(0,0,0,.4)",
          "500": "rgba(0,0,0,.5)",
          "600": "rgba(0,0,0,.6)",
          "700": "rgba(0,0,0,.7)",
          "800": "rgba(0,0,0,.8)",
        },
        transparentPrimary: {
          "150": "rgba(var(--primary-color)/.05)",
          "200": "rgba(var(--primary-color)/.2)",
          "900": "rgba(var(--primary-color)/.9)",
        },
      },
      fontFamily: {
        titleFont: ["Rubik", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        textFont: ["Nunito", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      fontSize: {
        xxs: ".6rem",
      },
      letterSpacing: {
        widest: "1em",
        subTitle: ".25rem",
      },
      screens: {
        xxl: "1400px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "lg": "2rem",
        "xl": "3rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
