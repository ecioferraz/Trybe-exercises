const fetchDog = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

module.exports = { fetchDog };