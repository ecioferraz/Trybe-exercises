def binary_search(list):
    start = 0
    end = len(list) - 1

    while end >= start:
        mid = (end + start) // 2

        if list[mid] is False:
            end = mid - 1
        else:
            start = mid + 1

    return start


if __name__ == "__main__":
    print(binary_search([True, True, True, True, False, False, False]))
    print(binary_search([True, True, False, False, False, False, False]))
