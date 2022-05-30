from ex01 import fizz_buzz


def test_fizz_buzz_should_return_list_of_numbers():
    assert fizz_buzz(2) == [1, 2]


def test_fizz_buzz_divisible_by_3_and_5_should_be_fizzbuzz():
    assert fizz_buzz(15)[-1] == "FizzBuzz"


def test_fizz_buzz_divisible_by_5_should_be_buzz():
    assert fizz_buzz(5)[-1] == "Buzz"


def test_fizz_buzz_divisible_by_3_should_be_fizz():
    assert fizz_buzz(3)[-1] == "Fizz"
