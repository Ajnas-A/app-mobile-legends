module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      'customBlack': '0 15px 60px -5px rgba(0,0,0, 0.8)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/4498467/pexels-photo-4498467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"

      },
      height: { "500": "500px", "278": "44rem" },
      width: { "300": "300px" },
      fontFamily: {
        'Gidole': ["Gidole"]
      },
      colors: { 'newBlack': '#134e5e', 'grad': '#71b280', }

    },

  },
  variants: {
    extend: { scale: ['group-hover'], },

  },
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/line-clamp')],

}
