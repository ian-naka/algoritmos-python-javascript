/*  Faça um programa que lê um valor de salário

mínimo e o salário de um funcionário. O programa
deve calcular e imprimir quantos salários mínimos
esse funcionário ganha.*/

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let salarioMinimo = 1804.0

rl.question("Digite o salário do funcionário: ", function(salario){
    console.log(`O funcionário ganha ${salario/salarioMinimo} salários mínimos`)
    rl.close()
})