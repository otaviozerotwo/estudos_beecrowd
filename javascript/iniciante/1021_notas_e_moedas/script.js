/* Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

* Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

* Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal. */

const prompt = require('prompt-sync')();

let valor;

do {
  valor = Math.round(Number(prompt()) * 100);

  if (valor < 0 || valor > 1000000.00) {
    console.log('O valor precisar estar entre 0 e 1000000.00');
  } else {
    const notasDe100 = Math.floor(valor / 10000);
    valor %= 10000

    const notasDe50 = Math.floor(valor / 5000);
    valor %= 5000;

    const notasDe20 = Math.floor(valor / 2000);
    valor %= 2000;

    const notasDe10 = Math.floor(valor / 1000);
    valor %= 1000;

    const notasDe5 = Math.floor(valor / 500);
    valor %= 500;

    const notasDe2 = Math.floor(valor / 200);
    valor %= 200;

    const moedasDe1 = Math.floor(valor / 100);
    valor %= 100;

    const moedasDe050 = Math.floor(valor / 50);
    valor %= 50;

    const moedasDe025 = Math.floor(valor / 25);
    valor %= 25;

    const moedasDe010 = Math.floor(valor / 10);
    valor %= 10;

    const moedasDe005 = Math.floor(valor / 5);
    valor %= 5;

    const moedasDe001 = valor;

    console.log('NOTAS:');
    console.log(`${Math.trunc(notasDe100)} nota(s) de R$ 100.00`);
    console.log(`${Math.trunc(notasDe50)} nota(s) de R$ 50.00`);
    console.log(`${Math.trunc(notasDe20)} nota(s) de R$ 20.00`);
    console.log(`${Math.trunc(notasDe10)} nota(s) de R$ 10.00`);
    console.log(`${Math.trunc(notasDe5)} nota(s) de R$ 5.00`);
    console.log(`${Math.trunc(notasDe2)} nota(s) de R$ 2.00`);
    console.log('MOEDAS:');
    console.log(`${Math.trunc(moedasDe1)} moeda(s) de R$ 1.00`);
    console.log(`${Math.trunc(moedasDe050)} moeda(s) de R$ 0.50`);
    console.log(`${Math.trunc(moedasDe025)} moeda(s) de R$ 0.25`);
    console.log(`${Math.trunc(moedasDe010)} moeda(s) de R$ 0.10`);
    console.log(`${Math.trunc(moedasDe005)} moeda(s) de R$ 0.05`);
    console.log(`${Math.trunc(moedasDe001)} moeda(s) de R$ 0.01`);
  }
} while (valor < 0 || valor > 1000000.00);