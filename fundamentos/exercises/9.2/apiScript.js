const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke
    );
}

const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
      const numbers = Array.from({
          length: 10
        },
        () => Math.floor(Math.random() * 50) + 1);
      // https://stackoverflow.com/questions/5836833/create-an-array-with-random-values

      const sum = numbers.map(number => number * number)
        .reduce((acc, number) => acc + number, 0);

      sum < 8000 ? resolve(sum) : reject();
    });
    promise.then(sum => [2, 3, 5, 10].map(num => sum / num))
    .catch(() => console.log('É mais de 8k!'));
}

fetchPromise()

window.onload = () => fetchJoke();