import { animate } from './helpers';

const modal = () => {
  // eslint-disable-next-line no-shadow
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  buttons.forEach((button) => button.addEventListener('click', () => {
    modal.style.display = 'block';
    if (document.body.clientWidth > 767) {
      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = `${progress * 100}%`;
        },
      });
    }
  }));
  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  });
};

export default modal;
