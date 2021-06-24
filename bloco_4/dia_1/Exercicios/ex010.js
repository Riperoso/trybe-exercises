let cust = 1500.00;
let valVenda = 2000.00;
let imposto = cust * 0.2;
let custImp = cust + imposto;

if (cust < 0 || valVenda < 0) {
  console.log("Erro")
}
else {
  console.log("Lucro de:",valVenda - custImp)
}