import { toggleScroll } from 'features/scroll'

const mobileMenu = document.querySelector('.header__menu-wrapper')

document.querySelectorAll('[data-action="menu"]').forEach(button => {
  button.onclick = function () {
    toggleScroll()
    mobileMenu.classList.toggle('_active')
  }
})

const menuItemsWithSubItems = document.querySelectorAll('.header__menu-item:has(.header__menu-list) > .header__menu-item-title')

menuItemsWithSubItems.forEach(item => {
  item.onclick = function (e) {
    if (!e.target.parentElement.classList.contains('header__menu-item')) return

    e.target.parentElement.classList.toggle('_active')
  }
})

void function() {
  document.addEventListener('DOMContentLoaded', () => mobileMenu.classList.add('_active'))
}