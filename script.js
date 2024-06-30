var swiper = new Swiper('.latest-movies', {
    effect: 'coverflow',
    grabCursor: true,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper2 = new Swiper('.continue-watching-list', {
    slidesPerView: 6,
    breakpoints: {
        200: {
            slidesPerView: 1.5,
        },
        400: {
            slidesPerView: 1.5,
        },
        600: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 5,
        },
    },
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"

    }
})

// Scroll Animation

const sr = ScrollReveal({
    distance: '60px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.latest-movies`, {
    origin: 'top',
    interval: 100
})
sr.reveal(`.desc-container`, {
    origin: 'left'
})
sr.reveal(`.details`, {
    origin: 'right',
    interval: 100
})
sr.reveal(`.footer, .continue-watching-list`,{
    origin: 'bottom',
    interval:100
})


// phone menu toggle

var navToggle = document.querySelector(".nav-toggle");
var navMenu = document.querySelector(".nav-menu");
var navItems = document.querySelectorAll(".nav-item");

navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
});


navItems.forEach(item => {
    item.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
    })
})