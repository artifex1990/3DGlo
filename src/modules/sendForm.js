const sendForm = ({ formIds, someElement = [] }) => {
  const statusBlock = document.createElement('div');
  const preloader = document.createElement('div');
  const errorText = 'Ошибка...';

  preloader.classList.add('spinner-grow', 'text-info');

  const sendData = (data) => fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  const validate = (list) => {
    const regexpPatternFields = {
      user_name: /[а-я\s]/g,
      user_phone: /[\d+-]/g,
      user_message: /[а-я\s\d,.!?\-:;()'"]/g,
    };
    let success = true;

    list.forEach((input) => {
      success = success && typeof regexpPatternFields[input.name] !== 'undefined'
        ? regexpPatternFields[input.name].test(input.value.toLowerCase())
        : success;
    });

    return success;
  };

  const submitForm = (form) => {
    const formData = new FormData(form);
    const formElements = form.querySelectorAll('input');
    const formBody = {};

    statusBlock.append(preloader);
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElement.forEach((el) => {
      const element = document.getElementById(el.id);

      if (el.type === 'block') {
        formBody[el.id] = element.textContent;
      }

      if (el.type === 'input') {
        formBody[el.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.querySelector('.spinner-grow').remove();

          formElements.forEach((input) => {
            // eslint-disable-next-line no-param-reassign
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.querySelector('.spinner-grow').remove();
          statusBlock.textContent = errorText;
        });
    } else {
      alert('Данные не валидны!');
    }
  };

  formIds.forEach((formId) => {
    try {
      const form = document.getElementById(formId);

      if (!form) {
        throw new Error(`Форма с id=${formId} не найдена!`);
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm(form);
      });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export default sendForm;
