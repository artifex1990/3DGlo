const timerModule = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const zeroForwardModify = (time) => (time < 10 ? `0${time}` : time);

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNew = new Date().getTime();
    const dateRemaining = (dateStop - dateNew) / 1000;
    const hours = Math.floor(dateRemaining / 60 / 60);
    const minutes = Math.floor(dateRemaining / 60) % 60;
    const seconds = Math.floor(dateRemaining % 60);

    return {
      dateRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    const timeRemaining = getTimeRemaining();

    if (timeRemaining.dateRemaining > 0) {
      timerHours.textContent = zeroForwardModify(timeRemaining.hours);
      timerMinutes.textContent = zeroForwardModify(timeRemaining.minutes);
      timerSeconds.textContent = zeroForwardModify(timeRemaining.seconds);

      setTimeout(updateClock, 1000);
    }
  };

  updateClock();
};

export default timerModule;
