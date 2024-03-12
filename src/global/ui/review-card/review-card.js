const LINES_LIMIT = 7

document.querySelectorAll('.review-card').forEach(card => {
  const text = card.querySelector('.review-card__text')
  const compStyles = getComputedStyle(text)

  const height = parseFloat(compStyles.getPropertyValue('height'))
  const lineHeight = parseFloat(compStyles.getPropertyValue('line-height'))

  if (height <= lineHeight * LINES_LIMIT) return

  let isOpen = false

  const button = document.createElement('button')
  button.className = 'review-card__read-more'
  button.innerText = 'Читать полностью'
  button.onclick = function() {

  }

  card.append(button)
})