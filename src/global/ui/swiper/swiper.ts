import { Swiper, Thumbs, Scrollbar, Grid } from 'swiper';

Swiper.use([Thumbs, Scrollbar, Grid]);

function isMobile() {
  return window.innerWidth < 1000
}

const clientsSwiper = new Swiper('.clients-swiper', {
  slidesPerView: isMobile() ? 1.3 : 3.6,
  grid: isMobile() ? { rows: 2, fill: 'row' } : undefined,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  }
})

const masterSwiper = new Swiper('.master-swiper', {
  spaceBetween: 20,
  slidesPerView: isMobile() ? 1.3 : 4.2,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },
});

const gallery = new Swiper('.gallery-swiper', {
  spaceBetween: 20,
  slidesPerView: isMobile() ? 1.1 : 3.1,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,

  },
});

const masterClassSwiper = new Swiper(".mc-swiper", {
  slidesPerView: 4.5,
  freeMode: true,
  watchSlidesProgress: true,
});
const masterClassSwiperThumbs = new Swiper(".mc-swiper-thumbs", {
  spaceBetween: 2,
  thumbs: {
    swiper: masterClassSwiper,
  },
});