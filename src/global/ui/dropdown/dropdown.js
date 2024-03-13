document.querySelectorAll('.dropdown').forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown__button')

  let activeItem = null

  dropdown.querySelectorAll('.dropdown__item-title').forEach(item => {
    if (item.textContent === button.textContent) {
      item.classList.add('_active')
      activeItem = item
    }

    item.addEventListener('click', () => {
      button.innerText = item.innerText
      activeItem?.classList.remove('_active')
      item.classList.add('_active')
      activeItem = item
    })
  })
})