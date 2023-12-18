function somar(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number")
    throw "Expected two numbers";

  return numero1 + numero2;
}

function subtrair(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number")
    throw "Expected two numbers";

  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number")
    throw "Expected two numbers";

  if (isNaN(numero1) || isNaN(numero2)) throw "Não pode multiplicar NaN";

  return numero1 * numero2 === -0 ? 0 : numero1 * numero2;
}

function dividir(numero1, numero2) {
  if (numero2 === 0) throw "Cannot divide by zero";

  if (typeof numero1 !== "number" || typeof numero2 !== "number")
    throw "Expected two numbers";

  if (isNaN(numero1) || isNaN(numero2)) throw "Cannot divide NaN";

  return numero1 / numero2 === -0 ? 0 : numero1 / numero2;
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
