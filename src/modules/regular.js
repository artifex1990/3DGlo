const regular = () => {
  const calculateInputs = document.querySelectorAll('input.calc-item[type=text]');
  const textInputs = document.querySelectorAll('form input[type=text]');
  const emailInputs = document.querySelectorAll('form input[type=email]');
  const phoneInputs = document.querySelectorAll('form input[type=tel]');
  const messageTextarea = document.getElementById('form2-message');
  const eventsCheck = ['blur', 'input'];

  const commonCondition = (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/\s+/g, ' ');
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/[-]+/g, '-');
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/^[\s-]+|[\s-]{2,}$|[\s]+(?=[\s-])/g, '');
  };

  const name = (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/[^а-яА-Я-\s]/gi, '');
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/( |^)[а-яА-Я]/gi, (str) => str.toUpperCase());
    commonCondition(event);
  };
  // eslint-disable-next-line no-param-reassign, no-useless-escape
  const email = (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9-@_.!~*]/gi, '');
    commonCondition(event);
  };
  // eslint-disable-next-line no-param-reassign
  const phone = (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/[^\d()+-]/g, '');
    commonCondition(event);
  };
  const message = (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/[^а-яА-Я\s\d,.!?:;()'"-]/gi, '');
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/(^|\.\s+)([а-яА-Я])/gi, (str) => str.toUpperCase());
    commonCondition(event);
  };
  // eslint-disable-next-line no-param-reassign
  const numbers = (event) => { event.target.value = event.target.value.replace(/[\D]/g, ''); };

  eventsCheck.forEach((event) => {
    textInputs.forEach((input) => input.addEventListener(event, name));
    emailInputs.forEach((input) => input.addEventListener(event, email));
    phoneInputs.forEach((input) => input.addEventListener(event, phone));
    calculateInputs.forEach((input) => input.addEventListener(event, numbers));
    messageTextarea.addEventListener(event, message);
  });
};

export default regular;
