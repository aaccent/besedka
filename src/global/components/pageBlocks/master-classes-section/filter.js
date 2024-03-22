import { disableScroll, enableScroll } from 'features/scroll'

void function () {
  const filter = document.querySelector('.master-classes-section__filter');
  const closeBtn = document.querySelector('.master-classes-section__filter-mobile-button');
  const filterBtn = document.querySelector('.master-classes-section__filter-title');

  if (!filter) return

  filterBtn.addEventListener('click', () => {
    filter.classList.add('_active');
    disableScroll();
  })

  closeBtn.addEventListener('touchstart', (e) => {
    const touch = e.touches[0].clientY

    closeBtn.addEventListener('touchmove', (e) => {
      const move = e.touches[0].clientY;
      if ((move-touch) > 50) {
        filter.style.translate = `0 400px`;

        setTimeout(() => {
          filter.classList.remove('_active');
          filter.style.translate = `0 0px`;
          enableScroll();
        }, 400);

      }
    })
  })
}()








