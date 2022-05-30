def fizz_buzz(num):
    fizz_buzz_list = []
    for n in range(1, num + 1):
        if n % 3 == 0 and n % 5 == 0:
            fizz_buzz_list.append("FizzBuzz")
        elif n % 5 == 0:
            fizz_buzz_list.append("Buzz")
        elif n % 3 == 0:
            fizz_buzz_list.append("Fizz")
        else:
            fizz_buzz_list.append(n)
    return fizz_buzz_list
