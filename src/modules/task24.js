const task24 = () => {
  const timers = document.getElementById('timers');
  const timersValue = timers.querySelector('span');
  const minSize = 0;
  const maxSize = 300;
  let counter = maxSize;

  const animation = () => {
    const signed = timers.classList.contains('down') ? -1 : 1;

    if ((timers.classList.contains('down') && counter <= minSize) || (!timers.classList.contains('down') && counter >= maxSize)) {
      timers.classList.toggle('down');
    } else {
      counter += signed;
      timersValue.textContent = counter;
    }

    setTimeout(() => requestAnimationFrame(animation), 60);
  };

  animation();
};

export default task24;
