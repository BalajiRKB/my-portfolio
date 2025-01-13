// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}', // Ensure that Tailwind scans your components
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors if necessary
        'glow-yellow': '#ffdd00',
      },
    },
  },
  plugins: [],
}
