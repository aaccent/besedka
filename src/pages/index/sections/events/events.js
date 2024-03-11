import createMqSwiper from 'features/createMqSwiper'
import { Scrollbar } from 'swiper'

createMqSwiper({
  mq: '(max-width: 800px)',
  obj: {
    selector: '.events__swiper',
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