module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      transitionDelay: {
        10: '10ms',
        20: '20ms',
        30: '30ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
