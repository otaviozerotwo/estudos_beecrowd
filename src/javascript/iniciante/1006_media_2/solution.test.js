const { solve } = require('./solution');

describe('1006 - Média 2', () => {
  it('deve calcular a média ponderada de 5.0 (peso 2), 6.0 (peso 3) e 7.0 (peso 5)', () => {
    expect(solve('5.0\n6.0\n7.0')).toBe('MEDIA = 6.3');
  });
  
  it('deve calcular a média ponderada de 5.0 (peso 2), 10.0 (peso 3) e 10.0 (peso 5)', () => {
    expect(solve('5.0\n10.0\n10.0')).toBe('MEDIA = 9.0');
  });
  it('deve calcular a média ponderada de 10.0 (peso 2), 10.0 (peso 3) e 5.0 (peso 5)', () => {
    expect(solve('10.0\n10.0\n5.0')).toBe('MEDIA = 7.5');
  });
});