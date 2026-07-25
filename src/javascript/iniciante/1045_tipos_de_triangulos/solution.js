/* Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES

* Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

* Saída
Imprima todas as classificações do triângulo especificado na entrada. */


// 1 - ler 3 valores e armazenar numa string
// 2 - separar string pelos espaços em 3 variaveis type number
// 3 - achar o maior valor e armazenar na variavel 'a'
// 4 - aplicar formulas e mostrar as mensagens correspondentes

function solve(input) {
  const [tempA, tempB, tempC] = input.split(' ').map(Number);
  let a, b, c;
  const tipoTriangulo = [];
  
  if (tempA > tempB && tempA > tempC) {
    a = tempA;
    b = tempB;
    c = tempC;
  } else if (tempB > tempA && tempB > tempC) {
    a = tempB;
    b = tempA;
    c = tempC;
  } else {
    a = tempC;
    b = tempB;
    c = tempA;
  }

  if (a >= (b + c)) {
    tipoTriangulo.push('NAO FORMA TRIANGULO');

  } else {
    if ((a**2) === ((b**2) + (c**2))) {
      tipoTriangulo.push('TRIANGULO RETANGULO');
    }

    if ((a**2) > ((b**2) + (c**2))) {
      tipoTriangulo.push('TRIANGULO OBTUSANGULO');
    }

    if ((a**2) < ((b**2) + (c**2))) {
      tipoTriangulo.push('TRIANGULO ACUTANGULO');
    }

    if (a === b && b === c) {
      tipoTriangulo.push('TRIANGULO EQUILATERO');
    }

    if ((a === b && b !== c) || (a === c && a !== b) || (b === c && c !== a)) {
      tipoTriangulo.push('TRIANGULO ISOSCELES');
    }
  }

  const result = tipoTriangulo.join('\n');
  
  return result;
}

module.exports = { solve };