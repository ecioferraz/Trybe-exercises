def has_divisor(num, divisor, previous_num):
    if divisor > previous_num:
        return False
    elif num % divisor == 0:
        return True
    else:
        return has_divisor(num, divisor + 1, previous_num)


def is_prime(num):
    return num > 1 and not has_divisor(num, 2, num - 1)


if __name__ == "__main__":
    print(is_prime(7))
