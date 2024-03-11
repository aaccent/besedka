import { Swiper, Thumbs, Scrollbar, Grid } from 'swiper';

Swiper.use([Thumbs, Scrollbar, Grid]);

new Swiper('.clients-swiper', {
  slidesPerView: 3.6,
  grid: undefined,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },

  breakpoints: {
    1000: {
      slidesPerView: 1.3,
      grid: { rows: 2, fill: 'row' },
    }
  }
})

new Swiper('.master-swiper', {
  spaceBetween: 20,
  slidesPerView: 4.2,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },

  breakpoints: {
    1000: {
      slidesPerView: 1.3,
    }
  }
});

new Swiper('.gallery-swiper', {
  spaceBetween: 20,
  slidesPerView: 3.1,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },
  
  breakpoints: {
    1000: {
      slidesPerView: 1.1,
    }
  }
});

const masterClassSwiper = new Swiper(".mc-swiper", {
  slidesPerView: 4.5,
  freeMode: true,
  watchSlidesProgress: true,
});

new Swiper(".mc-swiper-thumbs", {
  spaceBetween: 2,
  thumbs: {
    swiper: masterClassSwiper,
  },
});