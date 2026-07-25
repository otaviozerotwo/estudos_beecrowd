const input = require('fs').readFileSync('input.txt', 'utf-8');

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

console.log(solve(input));