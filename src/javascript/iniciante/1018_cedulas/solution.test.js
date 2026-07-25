const { solve } = require('./solution');

describe('1018 - Cédulas', () => {
  it('deve calcular a quantidade de cédulas de dinheiro a partir do valor recebido', () => {
    const expected = `576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00`;

    expect(solve('576')).toBe(expected);
  });

  it('deve calcular a quantidade de cédulas de dinheiro a partir do valor recebido', () => {
    const expected = `11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00`;

    expect(solve('11257')).toBe(expected);
  });

  it('deve calcular a quantidade de cédulas de dinheiro a partir do valor recebido', () => {
    const expected = `503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00`;

    expect(solve('503')).toBe(expected);
  });
});