const helloModule = () => {
  const date = new Date();
  // eslint-disable-next-line max-len
  const capitalizeFirstLetter = (string) => (string ? string[0].toUpperCase() + string.slice(1) : string);
  const getDayPeriod = () => new Intl.DateTimeFormat('ru', { dayPeriod: 'narrow' }).format(date);
  const getTodayName = () => new Intl.DateTimeFormat('ru', { weekday: 'long' }).format(date);
  const getCurrentTime = () => new Intl.DateTimeFormat('en', { timeStyle: 'medium' }).format(date);
  const getStillDayOfNewYear = () => Math.floor((new Date(`1 january ${+new Date().getFullYear() + 1}`) - new Date()) / 1000 / 60 / 60 / 24);
  const declinationOfDays = (days) => {
    const dayCondition = days % 10;
    if (dayCondition === 1) return 'день';
    if (dayCondition > 1 && dayCondition < 5) return 'дня';

    return 'дней';
  };

  const printDates = () => {
    const dayPeriod = getDayPeriod();
    const stillDayOfNewYear = getStillDayOfNewYear();
    const greeting = {
      утро: 'Доброе',
      день: 'Добрый',
      вечер: 'Добрый',
      ночи: 'Доброй',
    };

    const timeOfDay = document.getElementById('time-of-day');
    const toDay = document.getElementById('today');
    const currentTime = document.getElementById('current-time');
    const stillUntilNewYear = document.getElementById('still-until-new-year');
    timeOfDay.textContent = `${greeting[dayPeriod]} ${dayPeriod}`;
    toDay.textContent = `Сегодня: ${capitalizeFirstLetter(getTodayName())}`;
    currentTime.textContent = `Текущее время: ${getCurrentTime()}`;
    stillUntilNewYear.textContent = `До нового года осталось ${stillDayOfNewYear} ${declinationOfDays(stillDayOfNewYear)}`;
  };

  printDates();
};

export default helloModule;
