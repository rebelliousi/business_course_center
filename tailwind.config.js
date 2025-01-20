module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6366f1',
        'secondary': '#a855f7',
        'tertiary': '#f97316',
        'darkgray':'#374151',
        'lightgray':'#f3f4f6'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}