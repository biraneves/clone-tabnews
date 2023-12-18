const calculadora = require("../../models/calculadora.js");

describe("'somar' function", () => {
  it("should add two positive numbers", () => {
    expect(calculadora.somar(1, 2)).toBe(3);
    expect(calculadora.somar(5, 10)).toBe(15);
    expect(calculadora.somar(100, 200)).toBe(300);
  });

  it("should add two negative numbers", () => {
    expect(calculadora.somar(-1, -2)).toBe(-3);
    expect(calculadora.somar(-5, -10)).toBe(-15);
    expect(calculadora.somar(-100, -200)).toBe(-300);
  });

  it("should add zero to any number", () => {
    expect(calculadora.somar(0, 1)).toBe(1);
    expect(calculadora.somar(10, 0)).toBe(10);
    expect(calculadora.somar(-100, 0)).toBe(-100);
    expect(calculadora.somar(0, 0)).toBe(0);
  });

  it("should add decimal numbers", () => {
    expect(calculadora.somar(0.1, 0.2)).toBeCloseTo(0.3, 6);
    expect(calculadora.somar(-1.5, 2.3)).toBeCloseTo(0.8, 6);
    expect(calculadora.somar(10.5, 0.0)).toBeCloseTo(10.5, 6);
  });

  it("should handle NaN inputs", () => {
    expect(calculadora.somar(NaN, 1)).toBeNaN();
    expect(calculadora.somar(1, NaN)).toBeNaN();
    expect(calculadora.somar(NaN, NaN)).toBeNaN();
  });

  it("should handle infinity inputs", () => {
    expect(calculadora.somar(Infinity, 1)).toBe(Infinity);
    expect(calculadora.somar(1, Infinity)).toBe(Infinity);
    expect(calculadora.somar(Infinity, Infinity)).toBe(Infinity);
    expect(calculadora.somar(-Infinity, 1)).toBe(-Infinity);
    expect(calculadora.somar(1, -Infinity)).toBe(-Infinity);
    expect(calculadora.somar(-Infinity, -Infinity)).toBe(-Infinity);
  });

  it("should throw an error if non-number arguments are provided", () => {
    expect(() => calculadora.somar("a", 1)).toThrowError(
      "Expected two numbers",
    );
    expect(() => calculadora.somar(1, "b")).toThrowError(
      "Expected two numbers",
    );
    expect(() => calculadora.somar("a", "b")).toThrowError(
      "Expected two numbers",
    );
  });
});

describe("'subtrair' function", () => {
  it("should subtract two positive numbers", () => {
    expect(calculadora.subtrair(1, 2)).toBe(-1);
    expect(calculadora.subtrair(5, 10)).toBe(-5);
    expect(calculadora.subtrair(100, 200)).toBe(-100);
    expect(calculadora.subtrair(300, 120)).toBe(180);
  });

  it("should subtract two negative numbers", () => {
    expect(calculadora.subtrair(-1, -2)).toBe(1);
    expect(calculadora.subtrair(-5, -10)).toBe(5);
    expect(calculadora.subtrair(-100, -200)).toBe(100);
  });

  it("should subtract zero to any number", () => {
    expect(calculadora.subtrair(0, 1)).toBe(-1);
    expect(calculadora.subtrair(10, 0)).toBe(10);
    expect(calculadora.subtrair(-100, 0)).toBe(-100);
    expect(calculadora.subtrair(0, 0)).toBe(0);
  });

  it("should subtract decimal numbers", () => {
    expect(calculadora.subtrair(0.1, 0.2)).toBeCloseTo(-0.1, 6);
    expect(calculadora.subtrair(-1.5, 2.3)).toBeCloseTo(-3.8, 6);
    expect(calculadora.subtrair(10.5, 0.0)).toBeCloseTo(10.5, 6);
  });

  it("should handle NaN inputs", () => {
    expect(calculadora.subtrair(NaN, 1)).toBeNaN();
    expect(calculadora.subtrair(1, NaN)).toBeNaN();
    expect(calculadora.subtrair(NaN, NaN)).toBeNaN();
  });

  it("should handle infinity inputs", () => {
    expect(calculadora.subtrair(Infinity, 1)).toBe(Infinity);
    expect(calculadora.subtrair(1, Infinity)).toBe(-Infinity);
    expect(calculadora.subtrair(Infinity, Infinity)).toBeNaN();
    expect(calculadora.subtrair(-Infinity, 1)).toBe(-Infinity);
    expect(calculadora.subtrair(1, -Infinity)).toBe(Infinity);
    expect(calculadora.subtrair(-Infinity, -Infinity)).toBeNaN();
  });

  it("should return 'Erro' if non-number arguments are provided", () => {
    expect(() => calculadora.subtrair("a", 1)).toThrowError(
      "Expected two numbers",
    );
    expect(() => calculadora.subtrair(1, "b")).toThrowError(
      "Expected two numbers",
    );
    expect(() => calculadora.subtrair("a", "b")).toThrowError(
      "Expected two numbers",
    );
  });
});

describe("'multiplicar' function", () => {
  it("should return the product of positive numbers", () => {
    expect(calculadora.multiplicar(2, 3)).toBe(6);
    expect(calculadora.multiplicar(10, 5)).toBe(50);
    expect(calculadora.multiplicar(20, 40)).toBe(800);
  });

  it("should return the product of negative numbers", () => {
    expect(calculadora.multiplicar(-2, -3)).toBe(6);
    expect(calculadora.multiplicar(-10, -5)).toBe(50);
    expect(calculadora.multiplicar(-20, -40)).toBe(800);
  });

  it("should return the product of a positive and a negative number", () => {
    expect(calculadora.multiplicar(-2, 3)).toBe(-6);
    expect(calculadora.multiplicar(10, -5)).toBe(-50);
    expect(calculadora.multiplicar(-20, 40)).toBe(-800);
  });

  it("should handle numbers close to zero", () => {
    expect(calculadora.multiplicar(0.001, 0.002)).toBeCloseTo(0.000002, 4);
    expect(calculadora.multiplicar(-0.001, 0.002)).toBeCloseTo(-0.000002, 4);
    expect(calculadora.multiplicar(0, -0.001)).toBeCloseTo(0, 4);
  });

  it("should return 0 when multiplying with 0", () => {
    expect(calculadora.multiplicar(0, 5)).toBe(0);
    expect(calculadora.multiplicar(-2, 0)).toBe(0);
    expect(calculadora.multiplicar(0, -3)).toBe(0);
  });

  it("should throw an error when there is any NaN", () => {
    expect(() => calculadora.multiplicar(NaN, 1)).toThrowError(
      "Não pode multiplicar NaN",
    );
    expect(() => calculadora.multiplicar(1, NaN)).toThrowError(
      "Não pode multiplicar NaN",
    );
    expect(() => calculadora.multiplicar(NaN, NaN)).toThrowError(
      "Não pode multiplicar NaN",
    );
  });

  it("should throw an error when one or both inputs are not numbers", () => {
    expect(() => calculadora.multiplicar("a", 1)).toThrowError(
      "Expected two numbers",
    );
    expect(() => calculadora.multiplicar(1, "b")).toThrowError(
      "Expected two numbers",
    );
    expect(() => calculadora.multiplicar("a", "b")).toThrowError(
      "Expected two numbers",
    );
  });
});

describe("'dividir' function", () => {
  it("should return the quotient between two positive numbers", () => {
    expect(calculadora.dividir(2, 3)).toBeCloseTo(0.666666666666666, 12);
    expect(calculadora.dividir(10, 5)).toBe(2);
    expect(calculadora.dividir(60, 40)).toBeCloseTo(1.5, 4);
    expect(calculadora.dividir(0, 4)).toBe(0);
  });

  it("should return the quotient between two negative numbers", () => {
    expect(calculadora.dividir(-2, -3)).toBe(0.6666666666666666, 12);
    expect(calculadora.dividir(-10, -5)).toBe(2);
    expect(calculadora.dividir(-60, -40)).toBeCloseTo(1.5, 4);
    expect(calculadora.dividir(-0, 4)).toBe(0);
  });

  it("should throw an error when dividing by 0", () => {
    expect(() => calculadora.dividir(10, 0)).toThrowError(
      "Cannot divide by zero",
    );
    expect(() => calculadora.dividir(-1, 0)).toThrowError(
      "Cannot divide by zero",
    );
    expect(() => calculadora.dividir(0, 0)).toThrowError(
      "Cannot divide by zero",
    );
  });

  it("should handle numbers close to zero", () => {
    expect(calculadora.dividir(0.001, 0.002)).toBeCloseTo(0.5, 4);
    expect(calculadora.dividir(-0.001, 0.002)).toBeCloseTo(-0.5, 4);
    expect(calculadora.dividir(0.001, -0.002)).toBeCloseTo(-0.5, 4);
  });

  it("should throw an error when there is any NaN", () => {
    expect(() => calculadora.dividir(NaN, 1)).toThrowError("Cannot divide NaN");
    expect(() => calculadora.dividir(1, NaN)).toThrowError("Cannot divide NaN");
    expect(() => calculadora.dividir(NaN, NaN)).toThrowError(
      "Cannot divide NaN",
    );
  });

  it("should throw an error when one or both inputs are not numbers", () => {
    expect(() => calculadora.dividir("a", 1)).toThrowError(
      "Expected two numbers",
    );
    expect(() => calculadora.dividir(1, "b")).toThrowError(
      "Expected two numbers",
    );
    expect(() => calculadora.dividir("a", "b")).toThrowError(
      "Expected two numbers",
    );
  });
});
