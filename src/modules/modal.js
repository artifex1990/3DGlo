const modal = () => {
  // eslint-disable-next-line no-shadow
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = document.querySelector('.popup-close');
  let opacity = 0;
  const animationOpacity = () => {
    if (modal.style.opacity < 101) {
      modal.style.opacity = `${opacity}%`;
      opacity += 5;
    }
  };
  buttons.forEach((button) => button.addEventListener('click', () => {
    modal.style.display = 'block';
    if (document.body.clientWidth > 767) {
      opacity = 0;
      modal.style.opacity = '0%';
      setInterval(() => requestAnimationFrame(animationOpacity), 25);
    }
  }));
  closeBtn.addEventListener('click', () => {
    cancelAnimationFrame(animationOpacity);
    modal.style.display = '';
  });
};

export default modal;
