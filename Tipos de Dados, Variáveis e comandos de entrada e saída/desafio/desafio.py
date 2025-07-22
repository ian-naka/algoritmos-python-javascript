"""DESAFIO: Uma empresa contratou um médico para avaliar
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
a saída: 5a-feira as 13:00 horas"""

matricula = int(input('Digite a sua matrícula: '))
dia = ' '
horas = ' '
if matricula < 1 or matricula > 30:
    print("Matrícula Inválida!")
elif matricula <= 6:
    dia = "2a-feira"
elif matricula <= 12:
    dia = "3a-feira"
elif matricula <= 18:
    dia = "4a-feira"
elif matricula <= 24:
    dia = "5a-feira"
else:  # já sabemos que é <= 30 aqui
    dia = "6a-feira"

posicao = (matricula - 1)%6

if(posicao == 0):
    horas = '13:00 horas'
elif(posicao == 1):
    horas = '14:00 horas'
elif(posicao == 2):
    horas = '15:00 horas'
elif(posicao == 3):
    horas = '16:00 horas'
elif(posicao == 4):
    horas = '17:00 horas'
elif(posicao == 5):
    horas = '18:00 horas'


print('O seu agendamento é na ',dia,' as ',horas)

