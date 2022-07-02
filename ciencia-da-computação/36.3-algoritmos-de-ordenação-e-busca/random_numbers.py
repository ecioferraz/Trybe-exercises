from random import shuffle


def random_numbers(length, ordered_list=False):
    ordered = list(range(length))
    inversely_ordered = list(reversed(range(length)))
    random = ordered[:] if ordered_list else inversely_ordered[:]
    # copia dos ordenados
    shuffle(random)  # embaralha eles
    return random


if __name__ == "__main__":
    print(random_numbers(10))
    print(random_numbers(10, True))
