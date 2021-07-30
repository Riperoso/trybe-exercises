// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let total = 0;

const verify = (arr, arr2) => {
  for(ind = 0; ind < arr.length; ind += 1) {
    if (arr[ind] === arr2[ind]) {
      total += 1
    } else if (arr2[ind] === 'N.A') {
      total
    } else {
      total -= 0.5
    }
  }
  return total
}

const verifyNotes = (arr1, arr2, callback) => {
  return callback(arr1, arr2);
}

console.log(verifyNotes(RIGHT_ANSWERS, STUDENT_ANSWERS, verify))