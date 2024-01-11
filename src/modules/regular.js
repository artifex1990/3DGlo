const regular = () => {
  const calculateInputs = document.querySelectorAll('input.calc-item[type=text]');
  const textInputs = document.querySelectorAll('form input[type=text]');
  const emailInputs = document.querySelectorAll('form input[type=email]');
  const phoneInputs = document.querySelectorAll('form input[type=tel]');
  const messageTextarea = document.getElementById('form2-message');

  // eslint-disable-next-line no-param-reassign
  const name = (event) => {
    event.target.value = event.target.value.replace(/[^а-яА-Я-\s]/gi, '');
    event.target.value = event.target.value.replace(/\s+/g, ' ');
    event.target.value = event.target.value.replace(/[-]+/g, '-');
  };
  // eslint-disable-next-line no-param-reassign, no-useless-escape
  const email = (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9-\@\_\.\!\~\*]/gi, '');
    event.target.value = event.target.value.replace(/[-]+/g, '-');
  };
  // eslint-disable-next-line no-param-reassign
  const phone = (event) => {
    event.target.value = event.target.value.replace(/[^\d()-]/g, '');
    event.target.value = event.target.value.replace(/[-]+/g, '-');
  };
  // eslint-disable-next-line no-param-reassign
  const numbers = (event) => { event.target.value = event.target.value.replace(/[\D]/g, ''); };

  textInputs.forEach((input) => input.addEventListener('blur', name));
  emailInputs.forEach((input) => input.addEventListener('blur', email));
  phoneInputs.forEach((input) => input.addEventListener('blur', phone));
  calculateInputs.forEach((input) => input.addEventListener('blur', numbers));
  messageTextarea.addEventListener('blur', name);
};

export default regular;
