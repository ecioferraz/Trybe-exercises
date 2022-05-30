from ex04 import check_valid_emails


def test_should_return_empty_list_if_no_emails():
    assert check_valid_emails([]) == []


def test_should_return_valid_emails():
    test_emails = ["nome@dominio.com", "outro@dominio.com"]
    emails_expected = ["nome@dominio.com", "outro@dominio.com"]
    assert check_valid_emails(test_emails) == emails_expected


def test_should_return_two_filtered_valid_emails():
    test_emails = [
      "nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"
      ]
    emails_expected = ["nome@dominio.com", "outro@dominio.com"]
    assert check_valid_emails(test_emails) == emails_expected


def test_should_return_empty_list_for_no_valid_emails():
    test_emails = [
      "errad#@dominio.com", "nome@dom!nio.com", "outro@dominio.co.uk"
      ]
    assert check_valid_emails(test_emails) == []
