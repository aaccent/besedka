import gsap from "gsap";
import { adaptiveValue, isMobile } from 'features/adaptive'

void function () {
    if (isMobile) return

    document.querySelectorAll('.info__block-img-wrapper').forEach(createAnimation)
}()

function createAnimation(element) {
    const first = element.querySelector('.info__block-img:nth-child(1)');
    const second = element.querySelector('.info__block-img:nth-child(2)');
    const third = element.querySelector('.info__block-img:nth-child(3)');
    
    gsap.timeline()
        .to(first, { top: '700px' }, '5')
        .to(second, {
            zIndex: 3,
            top: 93,
            width: adaptiveValue(635),
            height: adaptiveValue(635),
            filter: 'none',
            onComplete() {
                element.prepend(second);
            }

        }, '<0.3')
        .to(third, {
            zIndex: 2,
            top: 44,
            width: adaptiveValue(566),
            height: adaptiveValue(566),
            filter: 'blur(5px)',
            onComplete() {
                second.after(third)
            }
        }, '<0.3')

        .to(first, {
            zIndex: 1,
            top: 0,
            width: adaptiveValue(506),
            height: adaptiveValue(506),
            filter: 'blur(7px)',
            onComplete() {
                createAnimation(element)
            }
        }, '<0.3')
}

