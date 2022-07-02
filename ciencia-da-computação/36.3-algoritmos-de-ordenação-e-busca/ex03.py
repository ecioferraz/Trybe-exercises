from random_numbers import random_numbers
from Cronometro import Cronometro


def selection_sort(list):
    for i in range(len(list)):
        minimum = i

        for j in range(i + 1, len(list)):
            if list[j] < list[minimum]:
                minimum = j

        list[minimum], list[i] = list[i], list[minimum]

    return list


def insertion_sort(list):
    for i in range(len(list)):
        current_value = list[i]
        current_position = i

        while (
            current_position > 0 and list[current_position - 1] > current_value
        ):
            list[current_position] = list[current_position - 1]
            current_position = current_position - 1

        list[current_position] = current_value
    return list


if __name__ == "__main__":
    with Cronometro():
        selection_sort(random_numbers(10_000))
    with Cronometro():
        selection_sort(random_numbers(100_000))
    with Cronometro():
        selection_sort(random_numbers(1_000_000))
    with Cronometro():
        insertion_sort(random_numbers(10_000))
    with Cronometro():
        insertion_sort(random_numbers(100_000))
    with Cronometro():
        insertion_sort(random_numbers(1_000_000))
