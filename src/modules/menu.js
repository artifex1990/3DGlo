const menu = () => {
  const menuBtn = document.querySelector('.menu');
  // eslint-disable-next-line no-shadow
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const serviceBlock = document.querySelector('a[href="#service-block"]');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  const animaitionScrool = (a) => {
    const element = document.querySelector(a.getAttribute('href'));
    if (element && document.body.clientWidth > 767) {
      window.scrollTo({
        top: Math.floor(element.getBoundingClientRect().top),
        behavior: 'smooth',
      });
    }
  };

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);
  serviceBlock.addEventListener('click', (event) => {
    event.preventDefault();
    animaitionScrool(event.target.parentElement);
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      animaitionScrool(event.target);
      handleMenu();
    });
  });
};

export default menu;
