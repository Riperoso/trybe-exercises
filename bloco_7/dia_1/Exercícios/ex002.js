// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

/* const sortOdds = sortOdds => {for(let index = 0; index < oddsAndEvens.length; index+=1){
  let oddSort = [2, 3, 4, 7, 10, 13]; 
  oddsAndEvens[index] = oddSort[index];
  }
}
sortOdds() */

const sortOdds = sortOdds => sortOdds.sort((a, b) => a - b);

console.log(`Os números ${sortOdds(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
