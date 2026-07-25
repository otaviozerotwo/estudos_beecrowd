const { solve } = require('./solution');

describe('1041 - Coordenadas de um ponto', () => {
  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('4.5 -2.2')).toBe('Q4');
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('0.1 0.1')).toBe('Q1');
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('0.0 0.0')).toBe('Origem');
  });
});