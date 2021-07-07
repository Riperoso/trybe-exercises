const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const container = document.querySelector('.container');

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
container.addEventListener("click", adicionaClasse)

function adicionaClasse(elemento) {
  if (document.querySelectorAll('.tech').length !== 0){ 
    document.querySelectorAll('.tech').forEach(el =>{
      el.classList.remove('tech')
    })
  };
  var targetElem = elemento.target;
  targetElem.classList.add('tech');
}
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("keyup", textIn);

function textIn(){
  document.querySelector('.tech').innerText = input.value;
}
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
myWebpage.addEventListener("dblclick", redPag)

function redPag(){
  //myWebpage.setAttribute('href', "https://www.youtube.com/watch?v=dgn0egjhDJs");

   window.location = "https://www.youtube.com/watch?v=dgn0egjhDJs";
}
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener("mouseover", altCor)

function altCor() {
  myWebpage.style = "color: red"
}
// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.style.color = "white"
  //event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
myWebpage.addEventListener("mouseout", resetText)
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.