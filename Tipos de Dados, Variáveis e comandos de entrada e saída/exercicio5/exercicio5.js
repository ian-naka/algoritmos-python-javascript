/*Faça um programa que lê uma temperatura em
graus Celsius e a imprime convertida em graus
Fahrenheit. A fórmula de conversão é:

F ← (9*C+160)/5*/

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let celsius
rl.question('Digite a temperatura em Celsius: ', function(celsius){
    console.log(`A temperatura em Fahrenheit é: ${(9*celsius+160)/5}`)
    rl.close();
})