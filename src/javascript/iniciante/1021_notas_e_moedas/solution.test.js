const { solve } = require('./solution');

describe('1021 - Notas e Moedas', () => {
  it('deve imprimir a quantidade mínima necessária de notas e moedas para trocar o valor inicial', () => {
    const expected = [
      'NOTAS:',
      '5 nota(s) de R$ 100.00',
      '1 nota(s) de R$ 50.00',
      '1 nota(s) de R$ 20.00',
      '0 nota(s) de R$ 10.00',
      '1 nota(s) de R$ 5.00',
      '0 nota(s) de R$ 2.00',
      'MOEDAS:',
      '1 moeda(s) de R$ 1.00',
      '1 moeda(s) de R$ 0.50',
      '0 moeda(s) de R$ 0.25',
      '2 moeda(s) de R$ 0.10',
      '0 moeda(s) de R$ 0.05',
      '3 moeda(s) de R$ 0.01'
    ].join('\n');

    expect(solve('576.73')).toBe(expected);
  });

  it('deve imprimir a quantidade mínima necessária de notas e moedas para trocar o valor inicial', () => {
    const expected = [
      'NOTAS:',
      '0 nota(s) de R$ 100.00',
      '0 nota(s) de R$ 50.00',
      '0 nota(s) de R$ 20.00',
      '0 nota(s) de R$ 10.00',
      '0 nota(s) de R$ 5.00',
      '2 nota(s) de R$ 2.00',
      'MOEDAS:',
      '0 moeda(s) de R$ 1.00',
      '0 moeda(s) de R$ 0.50',
      '0 moeda(s) de R$ 0.25',
      '0 moeda(s) de R$ 0.10',
      '0 moeda(s) de R$ 0.05',
      '0 moeda(s) de R$ 0.01'
    ].join('\n');

    expect(solve('4.00')).toBe(expected);
  });

  it('deve imprimir a quantidade mínima necessária de notas e moedas para trocar o valor inicial', () => {
    const expected = [
      'NOTAS:',
      '0 nota(s) de R$ 100.00',
      '1 nota(s) de R$ 50.00',
      '2 nota(s) de R$ 20.00',
      '0 nota(s) de R$ 10.00',
      '0 nota(s) de R$ 5.00',
      '0 nota(s) de R$ 2.00',
      'MOEDAS:',
      '1 moeda(s) de R$ 1.00',
      '0 moeda(s) de R$ 0.50',
      '0 moeda(s) de R$ 0.25',
      '0 moeda(s) de R$ 0.10',
      '0 moeda(s) de R$ 0.05',
      '1 moeda(s) de R$ 0.01'
    ].join('\n');

    expect(solve('91.01')).toBe(expected);
  });
});