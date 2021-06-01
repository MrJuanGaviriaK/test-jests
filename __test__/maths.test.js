import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('calculos', () => {
  test('Prueba sumar', () => {
    expect(sumar(1, 2)).toBe(3);
  });

  test('Prueba multiplicar', () => {
    expect(multiplicar(2, 2)).toBe(4);
  });

  test('Prueba restar', () => {
    expect(restar(2, 2)).toBe(0);
  });

  test('Prueba dividir', () => {
    expect(dividir(6, 2)).toBe(3);
  });
});
