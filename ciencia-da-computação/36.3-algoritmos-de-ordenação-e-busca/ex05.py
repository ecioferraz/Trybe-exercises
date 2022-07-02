def binary_search(list, value):
    start = 0
    end = len(list) - 1

    while end >= start:
        mid = (end + start) // 2

        if list[mid] == value:
            return mid
        elif list[mid] > value:
            end = mid - 1
        else:
            start = mid + 1

    raise ValueError(f"{value} is not in the list")


if __name__ == "__main__":
    list = [2, 3, 4, 10, 40]
    target = 40

    result = binary_search(list, target)

    print(f"Elemento encontrado na posição {result}")

    # if end < start:
    #     raise ValueError(f"{value} is not in the list")

    # middle_index = (end + start) // 2

    # if list[middle_index] == value:
    #     return middle_index
    # elif list[middle_index] > value:
    #     return binary_search(list, start, middle_index - 1, value)
    # else:
    #     return binary_search(list, middle_index + 1, end, value)
