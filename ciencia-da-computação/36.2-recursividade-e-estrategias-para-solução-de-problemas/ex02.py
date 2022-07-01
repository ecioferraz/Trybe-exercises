def count_even(initial_number):
    if initial_number < 2:
        return 0
    elif initial_number % 2 == 0:
        return 1 + count_even(initial_number - 1)
    return count_even(initial_number - 1)


if __name__ == "__main__":
    print(count_even(5))
