const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const dots = document.querySelectorAll('.dot');
  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(dots, currentSlide, 'dot-active');
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    currentSlide += 1;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(dots, currentSlide, 'dot-active');
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
    prevSlide(dots, currentSlide, 'dot-active');
    prevSlide(slides, currentSlide, 'portfolio-item-active');

    if (element.matches('#arrow-right')) {
      currentSlide += 1;
    }

    if (element.matches('#arrow-left')) {
      currentSlide -= 1;
    }

    if (element.classList.contains('dot')) {
      dots.forEach((dot, index) => {
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

    nextSlide(dots, currentSlide, 'dot-active');
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

  startSlide(timeInterval);
};

export default slider;
