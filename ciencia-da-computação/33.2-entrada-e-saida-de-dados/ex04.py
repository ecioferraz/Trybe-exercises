import csv
import json


with open("books.json") as bookFile:
    books = json.load(bookFile)

book_categories = {}

for book in books:
    for category in book["categories"]:
        if not book_categories.get(category):
            book_categories[category] = 0
        book_categories[category] += 1

books_percentage = [
  [category, num_books / len(books)]
  for category, num_books in book_categories.items()
]

with open("books.csv", "w") as booksCsv:
    csv.writer(booksCsv).writerow(["Categoria", "Porcentagem"])
    csv.writer(booksCsv).writerow(books_percentage)
