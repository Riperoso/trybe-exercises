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

//1

function createDaysMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    dayListItem.className = 'day'

    if (dezDaysList[index] == 24 | dezDaysList[index] == 25 | dezDaysList[index] == 31){
      dayListItem.classList.add('holliday');
      
    }
    if (dezDaysList[index] == 4 | dezDaysList[index] == 11 | dezDaysList[index] == 18 |dezDaysList[index] == 25){
      dayListItem.classList.add('friday');
    }
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysMonth();

//2
function addBotao(str, id){
  
  const btn = document.createElement('button');
  btn.innerText = str;
  btn.id = id;
  document.querySelector('.buttons-container').appendChild(btn);
}

addBotao("Feriados", 'btn-holliday');

//3

document.querySelector('#btn-holliday').addEventListener("click", botaoEvento);

function botaoEvento(){
  for (let ind of document.querySelectorAll('.holliday')){
    ind.style.backgroundColor = 'red';
  }
}

//4

addBotao("Sexta-Feira", 'btn-friday');

//5

document.querySelector('#btn-friday').addEventListener("click", botaoSexta);

function botaoSexta(){
  for (let ind of document.querySelectorAll('.friday')){
    ind.innerText = "RATOMANOCU!!";
  }
}