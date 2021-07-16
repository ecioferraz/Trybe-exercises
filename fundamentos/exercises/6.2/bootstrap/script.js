import './node_modules/just-validate/dist/js/just-validate.js'

function createStates () {
  const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  const states = document.querySelector('#state')

  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOption = document.createElement('option');
    states.appendChild(createOption);
    createOption.innerHTML = stateOptions[index];
    createOption.value = stateOptions[index];
  }
}

const picker = new Pikaday({
  field: document.querySelector('#start-day'),
  format: 'D/M/YYYY',
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

const clearBtn = document.querySelector('.clear-btn');
function clearForms() {
  const formInputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formInputs.length; index += 1) {
    const input = formInputs[index];
    input.value = '';
    textArea.value = '';
  }
}

clearBtn.addEventListener('click', clearForms);

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 1000
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'Campo obrigatório.',
      maxLength: 'Limite de 40 caracteres.'
    },
    email: {
      required: 'Campo obrigatório.',
      email: 'E-mail não é válido',
      maxLength: 'Limite de 50 caracteres'
  },
    cpf: {
      required: 'Campo obrigatório.',
      maxLength: 'Limite de 11 caracteres'
  },
    address: {
      required: 'Campo obrigatório.',
      maxLength: 'Limite de 200 caracteres'
    },
    city: {
      required: 'Campo obrigatório.',
      maxLength: 'Limite de 28 caracteres'
    },
    state: {
      required: 'Campo obrigatório.',
    },
    radio: {
      required: 'Campo obrigatório.',
    },
    text: {
      required: 'Campo obrigatório.',
      maxLength: 'Limite de 1000 caracteres'
    },
    position: {
      required: 'Campo obrigatório.',
      maxLength: 'Limite de 40 caracteres'
    },
    description: {
      required: 'Campo obrigatório.',
      maxLength: 'Limite de 500 caracteres'
    },
    date: {
      required: 'Campo obrigatório.',
    }
  },
  sutmitHandler: function (form, values) {
    console.log(form, values);
  }
});

window.onload = function () {
  createStates();
};