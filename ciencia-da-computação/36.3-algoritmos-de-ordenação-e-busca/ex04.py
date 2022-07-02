from random_numbers import random_numbers
from Cronometro import Cronometro


def merge_sort(list: list):
    if len(list) <= 1:
        return list

    mid = len(list) // 2
    left, right = merge_sort(list[:mid]), merge_sort(list[mid:])

    return merge(left, right, list.copy())


def merge(left, right, merged):
    left_cursor, right_cursor = 0, 0

    while left_cursor < len(left) and right_cursor < len(right):
        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            right_cursor += 1

    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]

    for right_cursor in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return merged


def bubble_sort(list):
    has_swapped = True
    num_of_iterations = 0

    while has_swapped:
        has_swapped = False
        for i in range(len(list) - num_of_iterations - 1):
            if list[i] > list[i + 1]:
                list[i], list[i + 1] = list[i + 1], list[i]
                has_swapped = True

        num_of_iterations += 1

    return list


if __name__ == "__main__":
    with Cronometro():
        merge_sort(random_numbers(10_000))
    with Cronometro():
        bubble_sort(random_numbers(10_000))
