const masterPageDescription = document.querySelector('.master-page-description')

document.querySelector('.master-page .read-full')?.addEventListener('click', (e) => {
  if (!masterPageDescription) return

  const isActive = masterPageDescription.classList.contains('_active')

  masterPageDescription.classList.toggle('_active')
  e.currentTarget.innerText = isActive ? 'Читать полностью' : 'Свернуть'
})