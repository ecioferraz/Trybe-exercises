// Parte 1
// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

// 2. Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
centerContent = document.createElement('div');
centerContent.className = 'center-content';
document.querySelector('.main-content').appendChild(centerContent);

// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
paragraph = document.createElement('p');
paragraph.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sed omnis beatae fuga totam, fugiat doloremque, enim rem cupiditate assumenda maiores voluptatem odio voluptate consequuntur dicta recusandae nobis dolorem quis?';
document.querySelector('.center-content').appendChild(paragraph);

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
leftContent = document.createElement('div');
leftContent.className = 'left-content';
document.querySelector('.main-content').appendChild(leftContent);

// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
rightContent = document.createElement('div');
rightContent.className = 'right-content';
document.querySelector('.main-content').appendChild(rightContent);

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

// Parte 2
// 1. Adicione a classe title na tag h1 criada;
h1.className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;
let h3 = document.querySelectorAll('h3');
for (let index = 0; index < h3.length; index += 1) {
  h3[index].className = 'description';
}

// 3. Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let divs = document.querySelectorAll('div');
document.querySelector('.main-content').removeChild(divs[2]);

// 4. Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
document.querySelector('.right-content').style.marginRight = 'auto';

// 5. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
document.querySelector('.center-content').parentNode.style.backgroundColor = 'green';

// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let lis = document.querySelectorAll('li');
document.querySelector('ul').removeChild(lis[8]);
document.querySelector('ul').removeChild(lis[9]);