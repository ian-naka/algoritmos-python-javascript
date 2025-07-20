/*Construa uma sequência de instruções para calcular o
volume de um copo com 12 cm de altura e 6 cm de
diâmetro, da seguinte forma:
• Declare as variáveis para raio, altura e volume;
• Inicialize as variáveis cujo valor é conhecido;
• Calcule o valor do volume e armazene-o na variável. */

let raio, altura, volume;
altura = 12;
raio = 3;
volume = altura * (3.14 * Math.pow(raio, 2));
console.log(`O volume é: ${volume}`);