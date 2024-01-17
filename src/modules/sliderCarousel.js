// eslint-disable-next-line import/no-extraneous-dependencies
import Swiper from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation } from 'swiper/modules';

const sliderCarousel = () => {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
};

export default sliderCarousel;
