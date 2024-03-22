// @type {import('tailwindcss').Config}
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        customColors: {
          bg: "#F2EDDC",
          main: "#424242",
          yellowCol: "#DCB700",
          note: "#2A4759",
          mail: "#787878",
          inpTextBorder: "#C8C8C8"
        },
        
      }
    },
  },
  plugins: [],
}

