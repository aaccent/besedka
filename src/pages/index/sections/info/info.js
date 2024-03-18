import { gsap } from "gsap";
import { Flip } from "gsap/Flip.js";
gsap.registerPlugin(Flip);




setInterval(() => {
    const first = document.querySelectorAll('.first');
    const second = document.querySelectorAll('.second');
    const third = document.querySelectorAll('.third');

    const state = Flip.getState(document.querySelectorAll('.info__block-img'), { props: 'top, left, translate, height' })

    first.forEach(el => el.classList.replace('first', 'noHeight'));

    second.forEach(el => el.classList.replace('second', 'first'));

    third.forEach(el => el.classList.replace('third', 'second'));

    first.forEach(el => el.classList.replace('noHeight', 'third'));

    Flip.from(state, {
        duration: 1,
        ease: "power1.inOut",
        scale: true,
    })
}, 4000)