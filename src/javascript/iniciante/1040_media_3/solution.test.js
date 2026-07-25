const { solve } = require('./solution');

describe('1040 - Média 3', () => {
  it('deve calcular a média ponderada de 4 notas com pesos 2, 3, 4 e 1 respectivamente', () => {
    const expected = [
      'Media: 5.4',
      'Aluno em exame.',
      'Nota do exame: 6.4',
      'Aluno aprovado.',
      'Media final: 5.9'
    ].join('\n');

    expect(solve('2.0 4.0 7.5 8.0\n6.4')).toBe(expected);
  });

  it('deve calcular a média ponderada de 4 notas com pesos 2, 3, 4 e 1 respectivamente', () => {
    const expected = [
      'Media: 4.8',
      'Aluno reprovado.'
    ].join('\n');

    expect(solve('2.0 6.5 4.0 9.0')).toBe(expected);
  });

  it('deve calcular a média ponderada de 4 notas com pesos 2, 3, 4 e 1 respectivamente', () => {
    const expected = [
      'Media: 7.3',
      'Aluno aprovado.'
    ].join('\n');

    expect(solve('9.0 4.0 8.5 9.0')).toBe(expected);
  });
});