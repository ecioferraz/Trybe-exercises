import pytest
from ex02 import letters_to_numbers


def test_abc_should_be_2():
    assert letters_to_numbers("ABC") == "222"


def test_def_should_be_3():
    assert letters_to_numbers("DEF") == "333"


def test_ghi_should_be_4():
    assert letters_to_numbers("GHI") == "444"


def test_jkl_should_be_5():
    assert letters_to_numbers("JKL") == "555"


def test_mno_should_be_6():
    assert letters_to_numbers("MNO") == "666"


def test_pqrs_should_be_7():
    assert letters_to_numbers("PQRS") == "7777"


def test_tuv_should_be_8():
    assert letters_to_numbers("TUV") == "888"


def test_wxyz_should_be_9():
    assert letters_to_numbers("WXYZ") == "9999"


def test_dash01_should_be_dash01():
    assert letters_to_numbers("-01") == "-01"


def test_empty_should_raise_value_error():
    with pytest.raises(ValueError):
        letters_to_numbers("")


def test_over_max_characters_should_raise_value_error():
    overload_letters = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    with pytest.raises(ValueError):
        letters_to_numbers(overload_letters)


def test_invalid_characters_should_raise_value_error():
    with pytest.raises(ValueError):
        letters_to_numbers(";;;")
