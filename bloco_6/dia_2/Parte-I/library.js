//instala biblioteca npm install moment --safe
let moment = require("moment");

let brasilTetra = moment('17071994', 'DDMMYYYY');
let fromNow = brasilTetra.fromNow();

console.log('Ouvimos o "É TETRAAA!!!" há: ' + fromNow);

//usa biblioteca cheet

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  alert('WOW, que maravilha!!!');
});