def count_even(initial_number):
    count = 0
    for number in range(1, initial_number + 1):
        if number % 2 == 0:
            count += 1
    return count


if __name__ == "__main__":
    print(count_even(5))
