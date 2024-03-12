const LINES_LIMIT = 7

document.querySelectorAll('.seo-block').forEach(seoBlock => {
    const text = seoBlock.querySelector('.seo-block-text')
    const container = seoBlock.querySelector('.seo-content')
    const compStyles = getComputedStyle(text)

    const height = parseFloat(compStyles.getPropertyValue('height'))
    const lineHeight = parseFloat(compStyles.getPropertyValue('line-height'))

    if (height <= lineHeight * LINES_LIMIT) return

    text.style.webkitLineClamp = LINES_LIMIT.toString()

    let isOpen = false

    const button = document.createElement('button')
    button.className = 'read-full'
    button.innerText = 'Читать полностью'
    button.onclick = function() {
        text.style.webkitLineClamp = isOpen ? LINES_LIMIT.toString() : ''
        button.innerText = isOpen ? 'Читать полностью' : 'Свернуть'
        isOpen = !isOpen
    }

    container.append(button)
})
