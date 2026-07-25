/* Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).
                   y
            Q2    |    Q1
                  |
            ------------- x
                  |
            Q3    |     Q4            

Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

* Entrada
A entrada contem as coordenadas de um ponto.

* Saída
A saída deve apresentar o quadrante em que o ponto se encontra. */

function solve(input) {
  const [x, y] = input.split(' ').map(Number);

  if (x === 0 && y === 0) {
    return 'Origem';
  } else if (x > 0 && y > 0) {
    return 'Q1';
  } else if (x < 0 && y > 0) {
    return 'Q2';
  } else if (x < 0 && y < 0) {
    return 'Q3';
  } else if (x > 0 && y < 0) {
    return 'Q4'
  } else if (x === 0 && y !== 0) {
    return 'Eixo Y';
  } else if (x !== 0 && y === 0) {
    return 'Eixo X';
  }
}

module.exports = { solve };