/* Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

* Entrada
A entrada contém três valores reais.

* Saída
O resultado deve ser apresentado com uma casa decimal. */

function solve(input) {
  const [a, b, c] = input.split(' ').map(Number);
  /* 
  para 3 valores formarem um triângulo, a soma dos comprimentos de quaisquer 2 lados deve ser sempre maior que o comprimento do terceiro lado
  
  FÓRMULA: (A + B > C) && (A + C > B) && (B + C > A) 
  */

  if ((a + b > c) && (a + c > b) && (b + c > a)) {
    const perimetro = a + b + c;

    return `Perimetro = ${perimetro.toFixed(1)}`;
  } else {
    const areaTrapezio = (a + b) * c / 2;

    return `Area = ${areaTrapezio.toFixed(1)}`;
  }
}

module.exports = { solve };