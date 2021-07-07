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
  btn.innerHTML = string;
  btn.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(btn);
}
btnHoliday('Feriados');

// Exercício 3
function highlightHoliday() {
  let btn = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let highlightColor = 'white';

  btn.addEventListener('click', function() {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === highlightColor) {
        holidays[index].style.backgroundColor = backgroundColor;
      } else {
        holidays[index].style.backgroundColor = highlightColor;
      }
    }
  })
}
highlightHoliday();

// Exercício 4
function btnFriday (string) {
  let btn = document.createElement('button');
  btn.innerHTML = string;
  btn.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(btn);
}
btnFriday('Sexta-feira');

// Exercício 5
function highlightFriday() {
  let btn = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');
  let newText = 'SEXTOU!'

  btn.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newText) {
        fridays[index].innerHTML = newText;
      } else {
        fridays[index].innerHTML = fridayDays[index];
      }
    }
  })
  fridayDays = [4, 11, 18, 25];
}
highlightFriday();

// Exercício 6
function zoomIn() {
let days = document.querySelector('#days');

days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};
zoomIn();

function zoomOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}
zoomOut();

// Exercício 7
function tasks(string) {
  let myTasks = document.querySelector('.my-tasks');
  let newSpan = document.createElement('span');
  newSpan.innerHTML = string + '<br>';

  myTasks.appendChild(newSpan);
}

tasks('cozinhar');


// Exercício 8
