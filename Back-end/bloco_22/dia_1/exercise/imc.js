const {questionInt, questionFloat} = require('readline-sync');

const peso = questionInt('Qual seu peso?');
const altura = questionFloat('Qual sua altura? ') ** 2;

const imc = parseFloat(peso / altura).toFixed(1);

if(imc <=18.5) {
  console.log(imc, 'Abaixo do peso (magreza)')
} else if(imc >= 18.5 && imc <= 24.9) {
  console.log(imc, 'Peso normal');
} else if(imc >= 25.0 && imc <= 29.9) {
  console.log(imc, 'Acima do peso (sobrepeso)');
} else if(imc >= 30.0 && imc <= 34.9) {
  console.log(imc, 'Obesidade grau I');
} else if (imc >= 35.0 && imc <= 39.9) {
  console.log(imc, 'Obesidade grau II');
} else if (imc >= 40.0) {
  console.log(imc, 'Obesidade graus III e IV');
} else {
  console.log(imc, "Inválido");
}
