// Crie um irmão para elementoOndeVoceEsta .
let irmão = document.querySelector('#pai');
let irmãoElement = document.createElement('div')
irmãoElement.innerText = "Irmão";

irmão.appendChild(irmãoElement);

// Crie um filho para elementoOndeVoceEsta .
let filhoEle = document.querySelector('#elementoOndeVoceEsta')
let filhoElemen = document.createElement('div')
filhoEle.innerText = "Filho"

filhoEle.appendChild(filhoElemen)
// Crie um filho para primeiroFilhoDoFilho .

// A partir desse filho criado, acesse terceiroFilho .