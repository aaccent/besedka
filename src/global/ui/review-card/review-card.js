import { openPopup } from 'features/popup'

const LINES_LIMIT = 7

const reviewTitle = document.querySelector('.review-popup .review-title')
const reviewText = document.querySelector('.review-popup .review-text')

document.querySelectorAll('.review-card').forEach(card => {
  const text = card.querySelector('.review-card__text')
  const title = card.querySelector('.review-card__title')

  const compStyles = getComputedStyle(text)

  const height = parseFloat(compStyles.getPropertyValue('height'))
  const lineHeight = parseFloat(compStyles.getPropertyValue('line-height'))

  if (height <= lineHeight * LINES_LIMIT) return

  let isOpen = false

  const button = document.createElement('button')
  button.className = 'review-card__read-more'
  button.innerText = 'Читать полностью'
  button.onclick = function() {
    if (!reviewTitle || !reviewText) return

    openPopup('review')
    reviewText.innerHTML = text.innerHTML
    reviewTitle.innerText = title.innerText
  }

  card.append(button)
})