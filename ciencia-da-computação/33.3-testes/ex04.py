from ex03 import validate_email


def check_valid_emails(emails):
    valid_emails = []
    for email in emails:
        try:
            validate_email(email)
        except ValueError:
            print(ValueError)
        else:
            valid_emails.append(email)
    return valid_emails
