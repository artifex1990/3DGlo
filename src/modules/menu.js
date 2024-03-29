const menu = () => {
  // eslint-disable-next-line no-shadow
  const menu = document.querySelector('menu');

  const animationScroll = (a) => {
    const element = document.querySelector(a.getAttribute('href'));
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
  };
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.body.addEventListener('click', (e) => {
    if (menu.closest('.active-menu')) {
      if (e.target.closest('ul')) {
        e.preventDefault();
        animationScroll(e.target);
      }

      if (e.target !== menu) {
        handleMenu();
      }
    }
    if (e.target.closest('a[href="#service-block"]')) {
      e.preventDefault();
      animationScroll(e.target.parentNode);
    }
    if (e.target.closest('.menu')) {
      handleMenu();
    }
  });
};

export default menu;
