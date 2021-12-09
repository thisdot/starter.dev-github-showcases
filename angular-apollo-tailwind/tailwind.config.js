module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDelay: {
        10: "10ms",
        20: "20ms",
        30: "30ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
