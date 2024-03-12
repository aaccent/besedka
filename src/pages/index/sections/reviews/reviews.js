import Swiper, { Scrollbar } from 'swiper'

new Swiper('.reviews__swiper', {
  slidesPerView: 1.1,
  spaceBetween: 20,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },
  modules: [Scrollbar],
  breakpoints: {
    1000: {
      slidesPerView: 3
    }
  },
})