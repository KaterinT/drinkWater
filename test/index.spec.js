import { myFunction } from 'src/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});