const slider = (container, item, dotsList, slideActive = 'slide-active', dotActive = 'dot-active') => {
  const sliderBlock = document.querySelector(container);
  const slides = document.querySelectorAll(item);
  const dotBlock = document.querySelector(dotsList);
  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  const generateDots = () => {
    dotBlock.innerHTML = '';
    for (let i = 0; i < slides.length; i += 1) {
      const li = document.createElement('li');
      li.classList.add('dot');
      if (!i) li.classList.add(dotActive);
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
    prevSlide(dotBlock.childNodes, currentSlide, dotActive);
    prevSlide(slides, currentSlide, slideActive);
    currentSlide += 1;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(dotBlock.childNodes, currentSlide, dotActive);
    nextSlide(slides, currentSlide, slideActive);
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  const checkClassSlider = (elCheck) => {
    for (let i = 0; i < elCheck.length; i += 1) {
      if (elCheck[i] === null) {
        return false;
      }
    }

    return true;
  };

  if (!checkClassSlider([sliderBlock, slides, dotBlock])) return;

  sliderBlock.addEventListener('click', (e) => {
    const element = e.target;

    e.preventDefault();

    if (!element.matches('.dot, .portfolio-btn')) return;
    prevSlide(dotBlock.childNodes, currentSlide, dotActive);
    prevSlide(slides, currentSlide, slideActive);

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

    nextSlide(dotBlock.childNodes, currentSlide, dotActive);
    nextSlide(slides, currentSlide, slideActive);
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
