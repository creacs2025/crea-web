import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.propuestas-wrapper', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

console.log('Swiper Propuestas Cargado Correctamente');