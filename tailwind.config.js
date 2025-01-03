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
        primaryColor: '#F5989D',
        secondaryColor: '#30746F',
        white: '#fff',
        silver: '#F5F7FA',
        silver_10: '#F5F7FA1A',
        D_Gray: '#4D4D4D',
        black_10: '#00000099',
        gray: '#717171',
        blue: '#D4EDF8',
        yellow: '#FEF9C4',
        brown: '#F2E7E3',
        green: '#E3F2E6',
        rose: '#FAE8E8',
        D_Blue: '#3B5998',
        D_Blue_Black: '#263238',
      },
      backgroundImage: {
        gradiantInsta: 'linear-gradient(to left, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)',
      },
  },
  plugins: [],
}

