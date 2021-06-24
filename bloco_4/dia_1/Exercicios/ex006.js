let peça = "Rei";
let low = peça .toLowerCase();

switch(low) {
  case 'peao':
    console.log("1 ou 2 pra frente no inicio, apos somente 1")
    break;
  case 'cavalo':
    console.log("Em formato de L")
    break;
   case 'bispo':
      console.log("Na diagonal")
    break;
  case 'torre':
    console.log("em linha reta")
    break;
  case 'rainha':
    console.log("Tanto diagonal quanto em linh reta")
      break;
  case 'rei':
    console.log("1 casa em qualquer direção")
    break;
  default:
    console.log("Erro")
  };