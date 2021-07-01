function changeColor(elements, color) {
  document.querySelector(elements).style.backgroundColor = color;
}

changeColor('.main-content', 'rgb(76,164,109)');

changeColor('.center-content', 'white');

function paragraphCapital(elements, index) {
  let paragraph = document.getElementsByTagName(elements)[index];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphCapital('p', 0);

function changeText(elements, index, text) {
  document.getElementsByTagName(elements)[index].innerText = text;
}

changeText('p', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur ex, officia ea eaque esse temporibus! Molestiae vitae doloribus exercitationem nobis repellendus excepturi corrupti qui soluta ea! Ab, minima aperiam.');

changeText('h1', 0, 'Exercício 5.1 - JavaScript')

function showParagraphs(elements) {
  let paragraphs = document.getElementsByTagName(elements);
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs('p')