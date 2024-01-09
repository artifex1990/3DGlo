const timerModule = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNew = new Date().getTime();
    let dateRemaining = (dateStop - dateNew) / 1000;
    let hours = Math.floor(dateRemaining / 60 / 60);
    let minutes = Math.floor(dateRemaining / 60) % 60;
    let seconds = Math.floor(dateRemaining % 60);

    return {dateRemaining, hours, minutes, seconds};
  };

  const updateClock = () => {
    let timeRemaining = getTimeRemaining();

    if (timeRemaining.dateRemaining > 0) {
      timerHours.textContent = zeroForwardModify(timeRemaining.hours);
      timerMinutes.textContent = zeroForwardModify(timeRemaining.minutes);
      timerSeconds.textContent = zeroForwardModify(timeRemaining.seconds);  

      setTimeout(updateClock, 1000);
    }
  };

  const zeroForwardModify = (time) => time < 10 ? `0${time}` : time;

  updateClock();
};

export default timerModule;
