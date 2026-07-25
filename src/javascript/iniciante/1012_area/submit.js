function solve(input) {
  const PI = 3.14159;

  const [a, b, c] = input.split(' ').map(Number);

  const areaTriangulo = (a * c) / 2;
  const areaCirculo = PI * (c**2);
  const areaTrapezio = ((a + b) * c) / 2;
  const areaQuadrado = b * b;
  const areaRetangulo = a * b;

  return `TRIANGULO: ${areaTriangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(3)}\nTRAPEZIO: ${areaTrapezio.toFixed(3)}\nQUADRADO: ${areaQuadrado.toFixed(3)}\nRETANGULO: ${areaRetangulo.toFixed(3)}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));