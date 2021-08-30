let angl1 = 10;
let angl2 = 30;
let angl3 = 20;
let somaDosTriangulo = angl1 + angl2 + angl3;

if (somaDosTriangulo > 180) {
  console.log(false)
}
else if (angl1< 0 || angl2 < 0 || angl3 < 0) {
  console.log("Angulo invalido")
}
else {
  console.log(true)
};