"""Faça um programa que lê uma temperatura em
graus Celsius e a imprime convertida em graus
Fahrenheit. A fórmula de conversão é:

F ← (9*C+160)/5"""

celsius = float(input('Digite a temperatura em celsius: '))
fahrenheit = ((9 * celsius + 160)/ 5)
print('A temperatura em Fahrenheit é: ',fahrenheit)