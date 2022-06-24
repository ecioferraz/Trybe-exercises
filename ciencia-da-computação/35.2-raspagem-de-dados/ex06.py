from pymongo import MongoClient


category = input("Choose a category: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find(
      {"categories": category.capitalize()}, projection=["title"]
    ):
        print(book["title"])
