/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}",],
  theme: {
    extend: { 
      backgroundImage: {
        'background': 'url("/src/background.png")',
      },
    }
  },
  plugins: [],
}

