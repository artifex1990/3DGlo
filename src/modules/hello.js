const helloModule = () => {
  // eslint-disable-next-line max-len
  const capitalizeFirstLetter = (string) => (string ? string[0].toUpperCase() + string.slice(1) : string);
  const getDayPeriod = () => new Intl.DateTimeFormat('ru', { dayPeriod: 'narrow' }).format(new Date());
  const getTodayName = () => new Intl.DateTimeFormat('ru', { weekday: 'long' }).format(new Date());
  const getCurrentTime = () => new Intl.DateTimeFormat('en', { timeStyle: 'medium' }).format(new Date());
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
    const greetingMessage = {
      утра: 'Доброе утро',
      дня: 'Добрый день',
      вечера: 'Добрый вечер',
      ночи: 'Доброй ночи',
    };

    const timeOfDay = document.getElementById('time-of-day');
    const toDay = document.getElementById('today');
    const currentTime = document.getElementById('current-time');
    const stillUntilNewYear = document.getElementById('still-until-new-year');
    timeOfDay.textContent = greetingMessage[dayPeriod];
    toDay.textContent = `Сегодня: ${capitalizeFirstLetter(getTodayName())}`;
    currentTime.textContent = `Текущее время: ${getCurrentTime()}`;
    stillUntilNewYear.textContent = `До нового года осталось ${stillDayOfNewYear} ${declinationOfDays(stillDayOfNewYear)}`;

    setTimeout(printDates, 1000);
  };

  printDates();
};

export default helloModule;
