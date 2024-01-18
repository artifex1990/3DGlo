const animate = ({ timing, draw, duration }) => {
  const start = performance.now();

  // eslint-disable-next-line no-shadow
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { animate };
