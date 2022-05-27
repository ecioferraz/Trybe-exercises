import random


words = ["trybe", "javascript", "python", "react", "express"]

MAX_TRIES = 3

guess = ""


def choose_world(words):
    chosen_word = random.choice(words)
    scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))
    return chosen_word, scrambled_word


def scrabble(words):
    chosen_word, scrambled_word = choose_world(words)
    guess = input("Advinhe a palavra:\n" + scrambled_word + "\n")
    current_try = 1
    if guess == chosen_word:
        print("Palavra correta!")
    else:
        while (guess != chosen_word) or (current_try <= MAX_TRIES):
            guess = input("Tente novamente: \n")
            current_try += 1
            if guess == chosen_word:
                print("Palavra correta!")
                break
            if current_try == MAX_TRIES:
                print("Você perdeu!")
                break


scrabble(words)
