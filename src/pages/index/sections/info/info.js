import { gsap } from "gsap";
import { Flip } from "gsap/Flip.js";

gsap.registerPlugin(Flip);

setInterval(() => {
    const first = document.querySelectorAll('.first');
    const second = document.querySelectorAll('.second');
    const third = document.querySelectorAll('.third');

    first.forEach(el => {
        el.classList.add('down');
        setTimeout(() => {
            el.classList.replace('first', 'third');
            el.classList.remove('down');
        }, 800)
    });

    second.forEach(el => el.classList.replace('second', 'first'));

    third.forEach(el => el.classList.replace('third', 'second'));
 }, 4000)