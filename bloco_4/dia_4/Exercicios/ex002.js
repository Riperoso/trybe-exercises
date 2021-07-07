//1

function palin(str) {
  if(str === str.split('').reverse().join('')){
   retorno = true;
} else {
    retorno = false;
}
 return retorno;
};

console.log(palin('arara'))

//2





function retornaIndiceMaiorValor() {
  let maior = array[0];
  let indice = 0;
  for (let i = 1; i < array.length; i++) {
      if (array[i] > maior) {
          maior = array[i];
          indice = i;
      }
  }
  return indice;
}

let array = [2, 3, 6, 7, 10, 1];
console.log(retornaIndiceMaiorValor(array));
