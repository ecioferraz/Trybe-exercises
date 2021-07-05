// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

// 2. Adicione a tag div com a classe main-content como filho da tag body ;
let div = document.createElement('div');
div.className = 'main-content';
document.body.appendChild(div);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
div = document.createElement('div');
div.className = 'center-content';
document.querySelector('.main-content').appendChild(div);

// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
paragraph = document.createElement('p');
paragraph.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sed omnis beatae fuga totam, fugiat doloremque, enim rem cupiditate assumenda maiores voluptatem odio voluptate consequuntur dicta recusandae nobis dolorem quis?';
document.querySelector('.center-content').appendChild(paragraph);

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
div = document.createElement('div');
div.className = 'left-content';
document.querySelector('.main-content').appendChild(div);

// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
div = document.createElement('div');
div.className = 'right-content';
document.querySelector('.main-content').appendChild(div);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
document.querySelector('.left-content').appendChild(image);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let listOfNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
let ul = document.createElement('ul');
document.querySelector('.right-content').appendChild(ul);

let list = document.querySelector('ul');

for (index = 0; index < listOfNumbers.length; index += 1) {
  let listItem = listOfNumbers[index];

  let addToList = document.createElement('li');
  addToList.innerHTML = listItem;

  list.appendChild(addToList);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (index = 0; index < 3; index += 1) {
  let h3 = document.createElement('h3');
document.querySelector('.main-content').appendChild(h3);
}