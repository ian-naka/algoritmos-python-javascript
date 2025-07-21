/*Construa um programa que leia dois valores
reais x e y, calcule e imprima os valores de w e
z de acordo com as fórmulas:

w = (2x + y)/2 e z = 1/w*/

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let w
rl.question('Digite o valor de x: ', function(x){
    rl.question('Digite o valor de y: ', function(y){
        w = (2 * x + y)/2
        console.log(`O valor de w é: ${w}\nO valor de z é ${1/w}`)
    })
})



