/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      MTS_Sans: ['MTSSans', 'sans-serif'],
    },
    backgroundImage: {
      MAIN_BG: 'url(/src/shared/assets/main-bg.png)',
      FLAME_BG: 'url(/src/shared/assets/flame.gif)',
      BONUS_BG: 'url(/src/shared/assets/bonus-bg.webp)',
    },
    colors: {
      'primary-blue': 'var(--primary-blue)',
      green: 'var(--success-green)',
      'green-light': 'var(--success-light)',
      'green-muted': 'var(--success-muted)',
      'error-red': 'var(--error-red)',
      'grey-light': 'var(--grey-light)',
      yellow: 'var(--yellow)',
      white: 'var(--white)',
      black_07: 'var(--black_07)',
      'grey-medium': 'var(--grey-medium)',
      'purple-darkest': 'var(--purple-darkest)',
      azure: 'var(--azure)',
      black: 'var(--black)',
    },
    extend: {
      fontSize: {},
      fontFamily: {
        inter: ['Inter'],
      },

      screens: {
        320: '320px',
        360: '360px',
        375: '375px',
        412: '412px',
        568: '568px',
        640: '640px',
        768: '768px',
        1024: '1024px',
        1280: '1280px',
        1440: '1440px',
        1920: '1920px',
        2560: '2560px',
      },
    },
  },

  plugins: [],
};
