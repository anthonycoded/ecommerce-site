module.exports = {
  //purge: [],
  content: ["./src/**/*.{html,js}"],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          main: "#388e3c", //"#0b3b60", //"#0EA44B",
          light: "#6abf69", //"#1365a5", //"rgba(14, 164, 75, 0.4)",
          dark: "#00600f", //"#082d49", //"#00680f",
        },
        paper: "#F4F4F4",

        faded: {
          light: "#ededed",
          gray: "rgba(168, 168, 168, 0.8)",
          dark: "#5F5F60",
        },
      },
      height: {
        110: "30rem",
        120: "34rem",
        130: "38rem",
        140: "40rem",
        150: "50rem",
        160: "60rem",
        165: "65rem",
        175: "75rem",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      width: {
        17: "17rem",
        18: "18rem",
        19: "19rem",
        21: "21rem",
      },
      transitionProperty: {
        height: "height",
      },
      screens: {
        landscape: { raw: "(max-height: 414px),(min-width:600px)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
