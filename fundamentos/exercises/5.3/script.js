function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
function december() {
  let decDaysList = [];
  for (let index = 29; index < 31; index += 1) {
    decDaysList.push(index);
  }
  
  for (let index = 1; index <= 31; index += 1) {
    decDaysList.push(index);
  }

  let days = document.querySelector('#days');

  for (let index = 0; index < decDaysList.length; index += 1) {
    let day = decDaysList[index];

    let addToDays = document.createElement('li');
    addToDays.innerHTML = day;

    days.appendChild(addToDays);

    if (day === 24 || day === 31) {
      addToDays.className = 'day holiday';
    } else if (day === 4 || day === 11 || day === 18) {
      addToDays.className = 'day friday';
    } else if (day === 25) {
      addToDays.className = 'day holiday friday';
    } else {
    addToDays.className = 'day';
    };
  };
}
december();

// Exercício 2
function btnHoliday (string) {
  let btn = document.createElement('button');
  btn.innerText = string;
  btn.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(btn);
}
btnHoliday('Feriados');

// Exercício 3
