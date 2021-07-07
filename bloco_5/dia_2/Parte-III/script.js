let irmão = document.querySelector('#pai');
let irmãoElement = document.createElement('div')
irmãoElement.innerText = "Irmão";

irmão.appendChild(irmãoElement);

let filhoEle = document.querySelector('#elementoOndeVoceEsta')
let filhoElemen = document.createElement('div')
filhoEle.innerText = "Filho"

filhoEle.appendChild(filhoElemen)

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let paiDPai = document.querySelector('#paiDoPai').children[all]

paiDPai.className = 'filhos'
 
paiDPai.removeChild()
