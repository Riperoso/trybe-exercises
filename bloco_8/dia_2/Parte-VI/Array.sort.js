// Ela permite ordenar um array de acordo com algum critério estabelecido. Veja este exemplo com um array de strings:

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// Agora, veja este exemplo com um array de números:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// Agora, se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

// Veja agora se realizarmos uma simples modificação no retorno da função que ordena os números e veja o que acontece:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// Fixação

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

let crescente = people.sort((a, b) => a.age - b.age);

console.log(crescente);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

let decrescente = people.sort((a, b) => b.age - a.age);

console.log(decrescente);