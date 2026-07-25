const { solve } = require('./solution');

describe('1036 - Fórmula de Bhaskara', () => {
  it('Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto', () => {
    const expected = [
      'R1 = -0.29788',
      'R2 = -1.71212'
    ].join('\n');

    expect(solve('10.0 20.1 5.1')).toBe(expected);
  });
  
  it('Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto', () => {
    const expected = 'Impossivel calcular';

    expect(solve('0.0 20.0 5.0')).toBe(expected);
  });

  it('Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto', () => {
    const expected = [
      'R1 = -0.02466',
      'R2 = -19.68408'
    ].join('\n');

    expect(solve('10.3 203.0 5.0')).toBe(expected);
  });

  it('Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto', () => {
    const expected = 'Impossivel calcular';

    expect(solve('10.0 3.0 5.0')).toBe(expected);
  });
});