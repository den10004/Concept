var swiper = new Swiper(".expertsSwiper", {
  loop: true,
  slidesPerView: 2,
  centeredSlides: false,
  navigation: {
    nextEl: ".next-experts",
    prevEl: ".prev-experts",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".brandsSwiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 50,
  centeredSlides: false,
  autoplay: {
    delay: 1,
  },
  speed: 1000,
});

var swiper = new Swiper(".whySwiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
});
