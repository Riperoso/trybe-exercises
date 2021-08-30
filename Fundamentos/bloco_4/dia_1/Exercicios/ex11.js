let salBruto = 6000.00;
var aliquo;
var salBase;
var aliquoIR;

if (salBruto <= 1556.94) {
  aliquo = salBruto * 0.08;
}
else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
  aliquo = salBruto * 0.09;
}
else if (salBruto >= 2594.93 && salBruto <= 6189.82) {
  aliquo = salBruto * 0.11;
}
else {
  aliquo = 570.88
}

salBase = salBruto - aliquo;

if (salBase <= 1903.98) {
  aliquoIR = 0;
}
else if (salBase >= 1903.99 && salBase <= 2826.65) {
  aliquoIR = salBase * 0.075 - 142.80;
}
else if (salBase >= 2826.66 && salBase <= 3751.05) {
  aliquoIR = salBase * 0.25 - 354.80;
}
else if (salBase >= 3751.06 && salBase <= 4664.68) {
  aliquoIR = salBase * 0.225 - 636.13;
}
else {
  aliquoIR = salBase * 0.275 - 868.36
}

var salLiqui = salBase - aliquoIR;

console.log("Salario Bruto de:",salBruto)
console.log("Salario Base de:",salBase)
console.log("Salario Liquido de:",salLiqui)