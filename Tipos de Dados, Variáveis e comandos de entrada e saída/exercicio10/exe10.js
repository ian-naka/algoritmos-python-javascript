/*Construa um programa para ler do teclado um
intervalo de tempo em segundos, converter
para horas, minutos e segundos e imprimir o
resultado. Faça o teste de mesa para uma
entrada de 72000 segundos.*/

const readline = require('readline') 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Digite um valor em segundos: ', function(segundos){
    console.log(`Esse valor representa: \nEm horas: ${segundos/3600} horas\n Em minutos: ${segundos/60} minutos\nEm segundos: ${segundos} segundos`)
})