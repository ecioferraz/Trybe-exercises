def reverse(string: str):
    return (
        string if len(string) <= 1
        else string[-1] + reverse(string[:len(string) - 1])
    )


def get_word_between_parenthesis(string: str):
    word = []

    to_reverse = string.split("(")
    for char in to_reverse[-1]:
        if char != ")":
            word.append(char)
    return f"{to_reverse[0]}{reverse(''.join(word))}"


if __name__ == "__main__":
    string = "teste(lagel)"
    print(get_word_between_parenthesis(string))
