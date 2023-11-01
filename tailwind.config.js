/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xs-min': '0px',
      'sm-min': '476px',
      'md-min': '768px',
      'lg-min': '969px',
      'xl-min': '1200px',
      'xs-max': { max: '475px' },
      'sm-max': { max: '767px' },
      'md-max': { max: '968px' },
      'lg-max': { max: '1999px' },
    },
    colors: {
      white: {
        100: '#FFFFFF',
        200: '#FAFAFA',
      },
      gray: {
        100: '#F1F1F1',
        200: '#979797',
      },
      black: {
        100: '#101010',
        200: '#000000',
      },
      orange: {
        100: '#FBAF85',
        200: '#D87D4A',
      },
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    fontSize: {
      xs: '13px',
      sm: '14px',
      smii: '15px',
      md: '18px',
      lg: '24px',
      xl: '28px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '56px',
    },
    letterSpacing: {
      xs: '1px',
      sm: '1.3px',
      md: '1.5px',
      lg: '2px',
      xl: '10px',
    },
    extend: {
      lineHeight: {
        19: '19px',
        24: '24px',
        25: '25px',
        33: '33px',
        36: '36px',
        38: '38px',
        44: '44px',
        58: '58px',
      },
      backgroundImage: {
        'desktop-hero': 'url(src/assets/home/desktop/image-hero.jpg)',
      },
    },
  },
  plugins: [],
};
