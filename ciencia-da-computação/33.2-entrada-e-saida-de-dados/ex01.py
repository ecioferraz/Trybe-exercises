name = input("Digite seu nome: ")

for letter in range(len(name)):
    for i in range(len(name) - letter):
        print(name[i], end="")
    print()
