const btnsReadMore = document.querySelectorAll('.read-full');

btnsReadMore.forEach(btn => {
    const openBlock = btn.closest('.open-block');
    const hiddenText = btn.closest('.open-block')?.querySelector('.hidden-text');

    btn.addEventListener('click', () => {
        openBlock?.classList.toggle('full-text');
        hiddenText?.classList.toggle('opened');

        if (openBlock?.classList.contains('full-text')) {
            btn.textContent = 'Скрыть';
        } else {
            btn.textContent = 'Читать полностью';
        }
    })
})





// const openBlock = document.querySelector('.open-block');
// const hiddenText = document.querySelector('.hidden-text');

// const readMoreHandler = (btn: HTMLButtonElement) => {
//     openBlock?.classList.toggle('full-text');
//     hiddenText?.classList.toggle('opened');

//     if (openBlock?.classList.contains('full-text')) {
//         btn.textContent = 'Скрыть';
//     } else {
//         btn.textContent = 'Читать полностью';
//     }

// }

// btnReadMore?.addEventListener('click', readMoreHandler)