const modal = () => {
  // eslint-disable-next-line no-shadow
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = document.querySelector('.popup-close');
  let opacity = 0;
  const animationOpacity = () => {
    const idAnimation = requestAnimationFrame(animationOpacity);

    if (modal.style.opacity < 1) {
      modal.style.opacity = opacity;
      opacity += 0.02;
    } else {
      cancelAnimationFrame(idAnimation);
    }
  };

  buttons.forEach((button) => button.addEventListener('click', () => {
    modal.style.display = 'block';
    if (document.body.clientWidth > 767) {
      opacity = 0;
      modal.style.opacity = 0;
      animationOpacity();
    }
  }));
  closeBtn.addEventListener('click', () => {
    modal.style.display = '';
  });
};

export default modal;