def count_words(words, chars):
    answer = 0
    alphabet = {}

    for char in chars:
        if char not in alphabet:
            alphabet[char] = 1
        else:
            alphabet[char] += 1

    for word in words:
        count = {}

        for char in word:
            if char not in alphabet:
                break

            if char not in count:
                count[char] = 1
            else:
                count[char] += 1

                if count[char] > alphabet[char]:
                    break
        else:
            answer += len(word)
    return answer


words = ["cat", "bt", "hat", "tree", "caaat"]
chars = "atach"
print(f"Resposta final: {count_words(words, chars)}")
print()
words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(f"Resposta final: {count_words(words, chars)}")
