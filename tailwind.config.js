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
      '2xl-min': '1600px',
      'xs-max': { max: '475px' },
      'sm-max': { max: '767px' },
      'md-max': { max: '968px' },
      'lg-max': { max: '1199px' },
      'xl-max': { max: '1599px' },
    },
    colors: {
      white: {
        100: '#FFFFFF',
        200: '#FAFAFA',
      },
      gray: {
        100: '#F1F1F1',
        200: '#979797',
        300: '#4C4C4C',
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
        'desktop-hero':
          'url(src/public/home/desktop/image-hero.jpg)',
        'hero-tablet':
          'url(src/public/home/tablet/image-hero.png)',
        'pattern-circles-svg':
          'url(public/home/desktop/pattern-circles.svg)',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        'size-xl': '65rem 65rem',
        'size-lg': '50rem 50rem',
        'size-md': '55rem 55rem',
        'zx9-size-md': '10rem 25rem',
      },
      backgroundPosition: {
        'p-2xl': '-8rem -1rem',
        'p-xl': '-11rem -1rem',
        'p-lg': '-9rem -1rem',
        'p-md': 'center -15rem',
      },
      margin: {
        'auto-0': '0',
      },
      padding: {
        29: '7.25rem',
        30: '7.50rem',
        31: '7.75rem',
      },
      width: {
        81: '20.25rem',
        82: '20.50rem',
        83: '20.75rem',
      },
      height: {
        104: '26rem',
      },
    },
  },
  plugins: [],
};
