const { solve } = require('./solution');

describe('1074 - Par ou Ímpar', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const input = [
      4,
      -5,
      0,
      3,
      -4
    ].join('\n');

    const expected = [
      'ODD NEGATIVE',
      'NULL',
      'ODD POSITIVE',
      'EVEN NEGATIVE'
    ].join('\n');
    
    expect(solve(input)).toBe(expected);
  });
});