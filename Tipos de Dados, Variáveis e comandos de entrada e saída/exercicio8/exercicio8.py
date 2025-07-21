"""Construa um programa que leia dois valores
reais x e y, calcule e imprima os valores de w e
z de acordo com as fórmulas:

w = (2x + y)/2 e z = 1/w"""

x = float(input('Digite o valor de x:'))
y = float(input('Digite o valor de y:'))
print('O valor de w é: ', ((2*x +y)/2), '\nO valor de z é: ',1/((2*x +y)/2))