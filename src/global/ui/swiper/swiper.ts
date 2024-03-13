import { Swiper, Thumbs, Scrollbar, Grid } from 'swiper';

Swiper.use([Thumbs, Scrollbar, Grid]);

new Swiper('.clients-swiper', {
  slidesPerView: 1.3,
  grid: { rows: 2, fill: 'row' },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },

  breakpoints: {
    1000: {
      slidesPerView: 3.6,
      grid: undefined,
    }
  }
})

new Swiper('.master-swiper', {
  spaceBetween: 20,
  slidesPerView: 1.2,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },
  breakpoints: {
    1000: {
      slidesPerView: 4.2,
    }
  }
});

new Swiper('.gallery-swiper', {
  spaceBetween: 20,
  slidesPerView: 1.1,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },

  breakpoints: {
    1000: {
      slidesPerView: 3.1,
    }
  }
});

const masterClassSwiper = new Swiper(".mc-swiper", {
  slidesPerView: 4.5,
  spaceBetween: 20,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1000: {
      slidesPerView: 7,
    }
  }
});

new Swiper(".mc-swiper-thumbs", {
  spaceBetween: 20,
  thumbs: {
    swiper: masterClassSwiper,
  },
});