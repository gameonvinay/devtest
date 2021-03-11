module.exports = {
  purge: {
    mode: 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#211b4e',
          910: '#575BDE',
        },
        gray: {
          920: '#F6F6F9',
          930: '#ECECEE',
          950: '#F2F2F2',
          960: '#110F24',
        },
      },
      letterSpacing: {
        steven: '0.33px',
      },
      margin: {
        0.25: '1px',
        13: '52px',
        4.5: '18px',
      },
      height: {
        68: '264px',
      },
      width: {
        custom: '99.5%',
        forselect: '120px',
      },
      minWidth: {
        task: '496px',
        forselect: '120px',
      },
      maxWidth: {
        task: '496px',
      },
      boxShadow: {
        minimum: '0px 1px 0px #ececee',
        DEFAULT: '0px 1px 3px rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        DEFAULT: '3px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
