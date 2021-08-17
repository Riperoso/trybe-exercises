const sum = require("./ex001.js")

test("testa se sum(4, 5) é 9", () => {
  expect(sum(4, 5)).toBe(9)
});

test("testa se sum(0, 0) é 0", () => {
  expect(sum(0, 0)).toBe(0)
});

test("testa se sum(4, '5') retorna erro", () => {
  expect(() => {sum(4, '5')}).toThrow()
});

test("testa se sum(4, '5') retorna erro Parameters must be numbers", () => {
  expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
});
