module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        rates: 'calc(calc(100% - 40px))',
      },
      colors: {
        pink: {
          custom: '#eeb7a5',
        },
        green: {
          custom: '#e1fe5e',
        },
        aqua: {
          custom: '#b7ecef',
        },
        gray: {
          custom: '#21222d',
        },
      },
    },
  },
  plugins: [],
};
