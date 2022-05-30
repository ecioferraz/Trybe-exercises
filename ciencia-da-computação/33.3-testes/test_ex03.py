import pytest
from ex03 import validate_email


def test_username_can_only_contain_letters():
    assert validate_email("test@dominio.com") is None


def test_username_can_contain_letters_and_digits():
    assert validate_email("test123@dominio.com") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert validate_email("test-123@dominio.com") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validate_email("test-123_@dominio.com") is None


def test_username_should_starts_with_letter():
    assert validate_email("t@dominio.com") is None


def test_username_raise_exception_when_dont_start_with_letter():
    with pytest.raises(ValueError, match="Invalid email"):
        validate_email("123@dominio.com")


def test_username_raise_exception_when_is_invalid():
    with pytest.raises(ValueError, match="Invalid email"):
        validate_email("test!@dominio.com")


def test_website_contain_only_letters_and_digits():
    assert validate_email("test@dominio123.com") is None


def test_website_raise_exception_when_invalid_chars():
    with pytest.raises(ValueError, match="Invalid email"):
        validate_email("abc@dominio!123.com")


def test_extension_should_contain_only_three_chars():
    assert validate_email("abc@dominio123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError, match="Invalid email"):
        validate_email("abc@dominio123.co.uk")
