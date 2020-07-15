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
})