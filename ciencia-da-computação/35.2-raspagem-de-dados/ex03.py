import requests

BASE_URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"

response = requests.get(
    BASE_URL, headers={"User-agent": "Mozilla", "Accept": "text/html"}
).text

assert "bot detected" not in response
