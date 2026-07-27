const { solve } = require('./solution');

describe('1048 - Aumento de salario', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const expected = [
      'Novo salario: 460.00',
      'Reajuste ganho: 60.00',
      'Em percentual: 15 %'
    ].join('\n');
    
    expect(solve('400.00')).toBe(expected);
  });

  it('deve resolver o exemplo do enunciado', () => {
    const expected = [
      'Novo salario: 880.01',
      'Reajuste ganho: 80.00',
      'Em percentual: 10 %'
    ].join('\n');

    expect(solve('800.01')).toBe(expected);
  });

  it('deve resolver o exemplo do enunciado', () => {
    const expected = [
      'Novo salario: 2140.00',
      'Reajuste ganho: 140.00',
      'Em percentual: 7 %'
    ].join('\n');

    expect(solve('2000.00')).toBe(expected);
  });
});