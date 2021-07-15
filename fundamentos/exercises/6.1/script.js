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

// function validateData () {
//   const name = document.querySelector('[name=name]');

//   if (name.value.length > 40 || name.value.length <= 0) {
//     alert('Nome inválido!');
//   } else {
//     alert('Nome válido!')
//   }
// }

// function handleSubmit (event) {
//   event.preventDefault();

//   validateData();
// }

window.onload = function () {
  createStates();
//   handleSubmit();

}