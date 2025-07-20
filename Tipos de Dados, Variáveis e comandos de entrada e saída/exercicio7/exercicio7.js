/*Construa um programa que aplique um
desconto de 25% sobre o preço de um produto
recebido como entrada e imprima o valor
resultante. Verifique se o programa está
correto fazendo o teste de mesa. Use o valor
150.00 como entrada.*/

const readline = require('readline')
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 rl.question('Digite o valor do produto: ',function(produto){
    console.log(`Com o desconto de 25% aplicado, o preço final do produto é de R$${produto * 0.75}`)
 })
    
 