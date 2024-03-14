const itemsWithSubmenu = document.querySelectorAll('.footer__menu-item:has( .footer__menu-list)')
itemsWithSubmenu.forEach(item => {
  const btn = item.querySelector('.footer__menu-item-title')
  btn.onclick = function() {
    item.classList.toggle('_active')
  }
})