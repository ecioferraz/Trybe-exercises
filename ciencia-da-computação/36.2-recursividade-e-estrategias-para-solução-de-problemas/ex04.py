def gcd(num1, num2):
    return num1 if not num2 else gcd(num2, num1 % num2)


if __name__ == "__main__":
    print(gcd(70, 25))
