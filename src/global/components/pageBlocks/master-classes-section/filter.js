import { toggleScroll } from 'features/scroll'

void function () {
  const filter = document.querySelector('.master-classes-section__filter')

  if (!filter) return

  document.querySelectorAll('[data-action="mobile-filter"]').forEach(btn => {
    btn?.addEventListener('click', () => {
      filter.classList.toggle('_active')
      toggleScroll()
    })
  })
}()