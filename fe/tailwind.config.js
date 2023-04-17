/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 6s linear infinite',
        'spin-delay': 'spin 6s linear infinite -3s',
        'custome2': 'green',
      },
    },
  },
  plugins: [],
}