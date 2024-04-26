import '/src/css/variables.scss';

import 'bulma-carousel/src/sass/index.sass';

import '/src/css/styles.scss';

import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.js';

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('HMR done 💪')
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navbarBurger = document.getElementById('navbar-burger')
    const navbar = document.getElementById('navbar')

    navbarBurger.addEventListener('click', () => {
        navbarBurger.classList.toggle('is-active')
        navbar.classList.toggle('is-active')
    })
})

window.addEventListener('load', () => {
    bulmaCarousel.attach('.carousel')
})
