import re

# https://www.geeksforgeeks.org/check-if-email-address-valid-or-not-in-python/
# https://www.geeksforgeeks.org/write-regular-expressions/
# https://stackoverflow.com/questions/25247843/what-is-the-regex-for-first-character-is-a-letter
regex = r'(^[a-zA-Z][a-zA-Z0-9_\-\.]*)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{3})$'


def validate_email(email):
    if not (re.fullmatch(regex, email)):
        raise ValueError("Invalid email")
