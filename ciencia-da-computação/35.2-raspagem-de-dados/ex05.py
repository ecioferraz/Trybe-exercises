import requests
from parsel import Selector


BASE_URL = (
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)

response = requests.get(BASE_URL).text
selector = Selector(text=response)
suffix = "...more"

title = selector.css(".product_main h1::text").get()
price = selector.css(
    ".product_main .price_color::text").re_first(r"£\d+\.\d{2}")
description = selector.css("#product_description ~ p::text").get()
image_url = selector.css("#product_gallery img::attr(src)").get()
availability = selector.css(
    ".product_main .availability::text").re_first(r"\d")

print(title, price, description[:-len(suffix)],
      BASE_URL + image_url, availability, sep=",")
