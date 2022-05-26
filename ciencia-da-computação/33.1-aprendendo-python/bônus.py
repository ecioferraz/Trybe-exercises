# Ex 01 Dada uma lista, descubra o menor elemento.

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def smallest_number(numbers):
    smallest = numbers[0]
    for num in numbers:
        if num < smallest:
            smallest = num
    return print(smallest)


# Course:
def minimum(numbers):
    return min(numbers)


# Ex 02 Faça um programa que, dado um valor n qualquer,
# tal que n > 1, imprima na tela um triângulo retângulo
# com n asteriscos de base.


def star_triangle(num):
    for star in range(1, num + 1):
        print(star * "*")


# Ex 03 Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.


def sumNumbers(number):
    total = 0
    for num in range(1, number + 1):
        total += num
    return print(total)


# Course:
def simulation(limit):
    return sum(range(1, limit + 1))


# Ex 04 Um posto está vendendo combustíveis com a seguinte tabela de descontos:

#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do
# litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def total_price(fuel, liters):
    if (fuel == "A"):
        if (liters <= 20):
            discount = 0.03
        price = 1.9
        discount = 0.05
    elif (fuel == "G"):
        if (liters <= 20):
            discount = 0.04
        price = 2.5
        discount = 0.06
    total = price * liters
    total -= total * discount
    return total
