const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const dotBlock = document.querySelector('.portfolio-dots');
  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  const generateDots = () => {
    dotBlock.innerHTML = '';
    for (let i = 0; i < slides.length; i += 1) {
      const li = document.createElement('li');
      li.classList.add('dot');
      if (!i) li.classList.add('dot-active');
      dotBlock.appendChild(li);
    }
  };

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(dotBlock.childNodes, currentSlide, 'dot-active');
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    currentSlide += 1;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(dotBlock.childNodes, currentSlide, 'dot-active');
    nextSlide(slides, currentSlide, 'portfolio-item-active');
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    const element = e.target;

    e.preventDefault();

    if (!element.matches('.dot, .portfolio-btn')) return;
    prevSlide(dotBlock.childNodes, currentSlide, 'dot-active');
    prevSlide(slides, currentSlide, 'portfolio-item-active');

    if (element.matches('#arrow-right')) {
      currentSlide += 1;
    }

    if (element.matches('#arrow-left')) {
      currentSlide -= 1;
    }

    if (element.classList.contains('dot')) {
      dotBlock.childNodes.forEach((dot, index) => {
        if (element === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(dotBlock.childNodes, currentSlide, 'dot-active');
    nextSlide(slides, currentSlide, 'portfolio-item-active');
  });

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide();
    }
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timeInterval);
    }
  }, true);

  generateDots();
  startSlide(timeInterval);
};

export default slider;
