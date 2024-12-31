/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Define a fonte padrão
        poppins: ['Poppins', 'sans-serif'], // Fonte personalizada
      },
    },
    colors: {
      'primaryColor': '#F5989D',
      'secondaryColor': '#30746F',
      'white': '#fff',
      'silver': '#F5F7FA',
      'D_Gray': '#4D4D4D',
      'gray': '#717171',
      'blue': '#D4EDF8',
      'yellow': '#FEF9C4',
      'bown': '#F2E7E3',
      'green': '#E3F2E6',
      'rose': '#FAE8E8',
    }
  },
  plugins: [],
}

