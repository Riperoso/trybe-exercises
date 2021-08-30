let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1
console.log('Bem-vinda,', info.personagem);

//2
info.recorrente = 'Sim';

console.log(info);

//3
for (let key in info) {
  console.log(key)
}

//4
for (let key in info) {
  console.log(info[key])
}

//5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178 ",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info, info2) {
  delete info.recorrente;
  delete info2.recorrente;
  console.log(info[key] , 'e' , info2[key])
}
console.log('Ambos Recorrentes')