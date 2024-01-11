const menu = () => {
  const menuBtn = document.querySelector('.menu');
  // eslint-disable-next-line no-shadow
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const serviceBlock = document.querySelector('a[href="#service-block"]');

  const animationScroll = (a) => {
    const element = document.querySelector(a.getAttribute('href'));
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
  };
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };
  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);
  serviceBlock.addEventListener('click', (event) => {
    event.preventDefault();
    animationScroll(event.target.parentElement);
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      animationScroll(event.target);
      handleMenu();
    });
  });
};

export default menu;
