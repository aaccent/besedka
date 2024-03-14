const autoScales = require('./postcss/auto-scales.cjs')

module.exports = {
  plugins: [
    autoScales({
      dodgeSelectors: [
        { type: 'startsWith', value: '.swiper' },
        { type: 'startsWith', value: '.carousel' },
        { type: 'includes', value: 'fancybox' },
        { type: 'includes', value: 'aos' },
      ],
      limitMediaWidth: false,
      initWidth: [
        { width: 1728 },
        { width: 800, mediaQuery: 'only screen and (max-width: 1000px) and (orientation: landscape)' },
        { width: 390, mediaQuery: 'only screen and (max-width: 760px)' },
        { width: 800, mediaQuery: 'only screen and (max-width: 1000px)' },
        { width: 1100, mediaQuery: 'only screen and (max-width: 1100px)' },
      ],
    }),
  ],
}