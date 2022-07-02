def get_biggest(numbers, size):
    if size == 1:
        return numbers[0]
    else:
        biggest = get_biggest(numbers, size - 1)
        if biggest > numbers[size - 1]:
            return biggest
        else:
            return numbers[size - 1]


if __name__ == "__main__":
    numbers = [24, 7, 5000, 1991]
    print(get_biggest(numbers, len(numbers)))
