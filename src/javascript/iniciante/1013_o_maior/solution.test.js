const { solve } = require('./solution');

describe('1013 - O maior', () => {
  it('deve retornar o maior entre três valores calculando: MaiorAB = (a+b+abs(a-b)) / 2', () => {
    expect(solve('7 14 106')).toBe('106 eh o maior');
  });
  
  it('deve retornar o maior entre três valores calculando: MaiorAB = (a+b+abs(a-b)) / 2', () => {
    expect(solve('217 14 6')).toBe('217 eh o maior');
  });
});