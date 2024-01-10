const modal = () => {
  // eslint-disable-next-line no-shadow
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = document.querySelector('.popup-close');
  let opacity = 0;
  const animation = () => {
    debugger;
    if (modal.style.opacity < 101) {
      modal.style.opacity = opacity;
      opacity += 1;
    }
  };
  buttons.forEach((button) => button.addEventListener('click', () => {
    requestAnimationFrame(animation);
    modal.style.display = 'block';
  }));
  closeBtn.addEventListener('click', () => {
    cancelAnimationFrame(animation);
    modal.style.display = '';
  });
};

export default modal;
