"""Faça um programa que leia três notas de um
aluno, calcule e imprima a média ponderada,
sabendo que as notas possuem peso 2, 3 e 5."""

x = float(input('Digite a primeira nota: '))
y = float(input('Digite a segunda nota: '))
z = float(input('Digite a terceira nota: '))
mediaPonderada = (x*2 + 3*y + 5*z)/3
print('A média ponderada é: ',mediaPonderada)