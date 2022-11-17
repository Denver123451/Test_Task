
import { accordion} from './faq.js';
//slider

document.addEventListener('DOMContentLoaded', () => {
    const sliderA = ItcSlider.getOrCreateInstance('.itc-slider', {
        loop: false,
        swipe: true
    });

    const next = document.getElementsByClassName('arrRight');
    const prev = document.getElementsByClassName('arrLeft');

    next[0].addEventListener('click', () => {
        sliderA.getOrCreateInstance('.itc-slider').next()
    }, false);

    prev[0].addEventListener('click', () => {
        sliderA.getOrCreateInstance('.itc-slider').prev()
    }, false);

});




accordion()