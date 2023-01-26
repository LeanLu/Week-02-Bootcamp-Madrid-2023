import { strictEquals } from './equals';
import { testCases } from './testCases';

/* Ejemplo de test caso a caso:
describe('Given strictEquals', () => {
  describe('When we have two parameters', () => {
    test('Then if they are 1 and 1, it should return true', () => {
      const a = 1;
      const b = 1;
      const expected = true;
      const r = strictEquals(a, b);
      expect(r).toBe(expected);
    });

    test('Then if they are NaN and NaN, it should return false', () => {
      const a = NaN;
      const b = NaN;
      const expected = false;
      const r = strictEquals(a, b);
      expect(r).toBe(expected);
    });
  });
});
*/

describe('Given strictEquals', () => {
  describe('When we have two parameters', () => {
    testCases.forEach((item) => {
      test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
        const r = strictEquals(item.a, item.b);
        expect(r).toBe(item.result);
      });
    });
  });

  describe.each(testCases)(
    'When we have two parameters',
    ({ a, b, label, result }) => {
      test(`When arguments are ${label}
            Then result should be ${result}`, () => {
        const r = strictEquals(a, b);
        expect(r).toBe(result);
      });
    }
  );
});
