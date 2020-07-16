const menuBtn = document.querySelector('.menu-button');
const mMenu = document.querySelector('.m-menu');

menuBtn.addEventListener('click', function () {
    mMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});


let mySwiper = new Swiper('.swiper-container', {
  
    loop: true,
    slidesPerView: 1,

    navigation: {
        nextEl: '.button-next',
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
        }
    }
});