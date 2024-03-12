import createMqSwiper from 'features/createMqSwiper'
import { Scrollbar } from 'swiper'

createMqSwiper({
  mq: '(max-width: 1100px)',
  obj: {
    selector: '.services__swiper',
    options: {
      slidesPerView: 1.2,
      spaceBetween: 19,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
      },
      modules: [Scrollbar],
    }
  }
})