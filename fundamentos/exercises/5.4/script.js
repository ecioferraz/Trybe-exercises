window.onload = function() {
let article = document.querySelector('article')
let p = document.querySelector('p');
let backgroundColor = document.querySelector('select[name = "background-color"]');
let paragraphColor = document.querySelector('select[name = "text-color"]');
let fontSize = document.querySelector('select[name = "font-size"]');
let lineHeight = document.querySelector('select[name = "line-height"]');
let fontFamily = document.querySelector('select[name = "font-family"]');

backgroundColor.addEventListener('change', function() {
  let selected = backgroundColor.selectedOptions[0];
  article.style.backgroundColor = selected.value;
  
  localStorage.setItem('bgColor', selected.value);
})

paragraphColor.addEventListener('change', function() {
  let selected = paragraphColor.selectedOptions[0];
  p.style.color = selected.value;

  localStorage.setItem('textColor', selected.value);
})

fontSize.addEventListener('change', function() {
  let selected = fontSize.selectedOptions[0];
  p.style.fontSize = selected.value;

  localStorage.setItem('fontSize', selected.value);
})

lineHeight.addEventListener('change', function() {
  let selected = lineHeight.selectedOptions[0];
  p.style.lineHeight = selected.value;

  localStorage.setItem('lineHeight', selected.value);
})

fontFamily.addEventListener('change', function() {
  let selected = fontFamily.selectedOptions[0];
  p.style.fontFamily = selected.value;

  localStorage.setItem('fontFamily', selected.value);
})

function storedInfo() {
  let savedBackground = localStorage.getItem('bgColor');
  article.style.backgroundColor = savedBackground;

  let savedParagraphColor = localStorage.getItem('textColor');
  p.style.color = savedParagraphColor;

  let savedFontSize = localStorage.getItem('fontSize');
  p.style.fontSize = savedFontSize;

  let savedLineHeight = localStorage.getItem('lineHeight');
  p.style.lineHeight = savedLineHeight;

  let savedFontFamily = localStorage.getItem('fontFamily');
  p.style.fontFamily = savedFontFamily;
}
storedInfo();

}