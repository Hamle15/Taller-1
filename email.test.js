const validateEmail = require("./index");

test("Validar dirección de correo electrónico válida", () => {
  expect(validateEmail("hamletcruzpirazan@gmail.com")).toBe(true);
});

test("Validar dirección de correo electrónico inválida", () => {
  expect(validateEmail("correo.invalido")).toBe(false);
});
