
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'cyan': 'hsl(184, 100%, 22%)',
        'cyan-dark': 'hsl(179, 100%, 13%)',
        'white-transparent': 'hsla(0, 0%, 100%, 0.75)',
        'orange': 'hsl(31, 77%, 52%)',
        'gray-light': 'hsl(0, 0%, 95%)',
      },
      fontFamily: {
        lex: ['Lexend Deca', 'sans-serif'],
        shoulder: ['Big Shoulders Display', 'cursive'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  plugins: [],
}
