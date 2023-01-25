import { add } from './sample.js';

describe('Testing add', () => {
  test('If a = 1 and b = 1 should be 2', () => {
    // Arrange:
    const a = 1;
    const b = 1;
    const expected = 2;

    // Act:
    const r = add(a, b);

    // Assert:
    expect(r).toBe(expected);
  });
});

/* Opción de organización GWT:

describe('Given Add function', () => {
  describe ('When we gave two numbers', () =>

  test('If a = 1 and b = 1 should be 2', () => {
    // Arrange:
    const a = 1;
    const b = 1;
    const expected = 2;

    // Act:
    const r = add(a, b);

    // Assert:
    expect(r).toBe(expected);
  });
  )


});
*/
