/*Faça um programa que leia três notas de um
aluno, calcule e imprima a média ponderada,
sabendo que as notas possuem peso 2, 3 e 5.*/
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite a primeira nota: ', function(x){
    rl.question('Digite a segunda nota: ', function(y){
        rl.question('Digite a terceira nota: ', function(z){
            console.log(`A média ponderada de notas é: ${(x*2 + y*3 + z*5)/3}`)
        })
    })
})