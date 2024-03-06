const btnReadMore = document.querySelector('.read-full');
const seoBlock = document.querySelector('.seo-block');
const hiddenText = document.querySelector('.hidden-text');

const readMoreHandler = () => {
    seoBlock?.classList.toggle('full-text');
    hiddenText?.classList.toggle('opened');

    if (seoBlock?.classList.contains('full-text') && btnReadMore) {
        btnReadMore.textContent = 'Скрыть';
    } else {
        btnReadMore!.textContent = 'Читать полностью';
    }

}

btnReadMore?.addEventListener('click', readMoreHandler)
