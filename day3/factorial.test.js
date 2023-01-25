import { factorial } from './factorial.js';

describe('Given factorial function', () => {
  describe('When have a positive integer', () => {
    test('Then factorial of 0 should be 1', () => {
      const r = factorial(0);
      expect(r).toBe(1);
    });

    test('Then factorial of 1 should be 1', () => {
      const r = factorial(1);
      expect(r).toBe(1);
    });

    test('Then factorial of 2 should be 2', () => {
      const r = factorial(2);
      expect(r).toBe(2);
    });

    test('Then factorial of 3 should be 6', () => {
      const r = factorial(3);
      expect(r).toBe(6);
    });

    test('Then factorial of 15 should be 1307674368000', () => {
      const r = factorial(15);
      expect(r).toBe(1_307_674_368_000);
    });

    // Último número que se puede calcular el factorial sin que de Infinity.
    test('Then factorial of 170 should be Infinity', () => {
      const r = factorial(170);
      expect(r).not.toBe(Infinity);
    });

    // Excepción. Un mensaje para avisar que no puedo realizar la operación:
    test('Then factorial of 171 should throw an error', () => {
      // Tengo que ejecutar la función dentro del expect.
      // Porque si primero la ejecuto, en la línea de la función se lanza un error (throw new Error) y se sale del código.
      // Dentro del expect le paso la función pero sin la ejecución. Sin los paréntesis de la función.
      expect(() => factorial(171)).toThrow();
    });
  });
});
