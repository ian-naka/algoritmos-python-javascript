/*Construa uma sequência de instruções para determinar
qual a quantidade de segundos exata de um dia,
considerando que possui 23 horas, 56 minutos e 4
segundos. Assim como no exercício anterior, declare
variáveis, inicialize-as e, por fim, realize o cálculo,
armazenando o resultado.*/

let horas, minutos, segundos;
horas = 23;
minutos = 56;
segundos = 4;
let segundosTotais = segundos + (minutos*60) + (horas*3600);
console.log(`O número de segundos totais é: ${segundosTotais}`)