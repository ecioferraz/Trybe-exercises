// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const btn = document.querySelector('button');
const clickCount = document.querySelector('p');
let count = 0;

btn.addEventListener('click', () => clickCount.innerHTML = count+=1);

// referência
// https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter