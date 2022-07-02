def reverse(numbers):
    return (
      numbers if len(numbers) <= 1
      else [numbers[-1]] + reverse(numbers[:len(numbers) - 1])
    )


if __name__ == "__main__":
    items_list = [1, 2, 3, 4, 5]
    print(reverse(items_list))
