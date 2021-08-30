// jest.mock() , que tem como principal diferencial mockar todo um pacote de dependências ou módulo de uma vez.

// Com o jest.mock() , podemos mockar todas com um só comando:
//jest.mock('./math.js');

const math = require('./math.js');
jest.mock("./math.js");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});