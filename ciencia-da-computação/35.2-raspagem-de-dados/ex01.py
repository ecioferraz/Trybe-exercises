import requests

response = requests.get("https://httpbin.org/encoding/utf8").text

print(response)
