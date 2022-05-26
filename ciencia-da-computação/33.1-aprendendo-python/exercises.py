import math

# Ex 01 Crie uma função que receba dois números e retorne o maior deles.


def greater_num(num1, num2):
    if num1 > num2:
        return num1
    return print(num2)


# Ex 02 Calcule a média aritmética dos valores contidos em uma lista.


def average(numbers):
    total = 0
    for num in numbers:
        total += num
    return print(total / len(numbers))


# Ex 03 Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def star_square(num):
    for star in range(num):
        print(num * "*")


# Ex 04 Crie uma função que receba uma lista de nomes
# e retorne o nome com a maior quantidade de caracteres.

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def longest_string(string):
    longest = string[0]
    for name in string:
        if len(name) > len(longest):
            longest = name
    return print(longest)


# Ex 05 Considere que a cobertura da tinta é de 1 litro para cada 3 metros
# quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo a quantidade
# de latas de tinta a serem compradas e o preço total a partir do tamanho
# de uma parede(em m²).


def paint_cost(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return print(required_cans, required_cans * can_price)


# Ex 06 Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.


def triangle(side_a, side_b, side_c):
    if not (
        side_a + side_b > side_c
        and side_a + side_c > side_b
        and side_b + side_c > side_a
    ):
        return print("Não é um triângulo")
    elif side_a == side_b == side_c:
        return print("Triângulo Equilátero")
    elif side_a == side_b or side_a == side_c or side_b == side_c:
        return print("Triângulo Isósceles")
    return print("Triângulo Escaleno")
