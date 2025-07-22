/* DESAFIO: Uma empresa contratou um médico para avaliar
todos os seus funcionários na própria sede da empresa. Para
que cada funcionário saiba o horário agendado para sua
consulta médica, você deverá fazer um programa que lê a
matrícula do funcionário e informa o dia e horário da consulta.
Observe que:
• As matrículas dos funcionários são números consecutivos
entre 1 e 30 (inclusive). Os funcionários serão atendidos em
ordem crescente de matrícula.
• As consultas duram uma hora e serão realizadas em uma
única semana, de 2a a 6a. O médico estará disponível das 8
às 14h.
Para a matrícula 24, por exemplo, o programa deverá imprimir
a saída: 5a-feira as 13:00 horas*/

const readline = require('readline') 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
 
rl.question('Informe a sua matrícula: ', function(matricula){
    matricula = parseInt(matricula
    )
        let dia = ''
        let hora = ''
    if (matricula >= 1 && matricula <= 6) {
            dia = '1ª-feira'
        } else if (matricula <= 12) {
            dia = '3ª-feira'
        } else if (matricula <= 18) {
            dia = '4ª-feira'
        } else if (matricula <= 24) {
            dia = '5ª-feira'
        } else {
            dia = '2ª-feira'
        }
        const posicao = (matricula - 1) % 6
        switch (posicao) {
            case 0: hora = '13:00 horas'; break;
            case 1: hora = '14:00 horas'; break;
            case 2: hora = '15:00 horas'; break;
            case 3: hora = '16:00 horas'; break;
            case 4: hora = '17:00 horas'; break;
            case 5: hora = '18:00 horas'; break;}
            console.log(`Sua matrícula (${matricula}) tem agendamento na ${dia} às ${hora}.`)
            rl.close()
})