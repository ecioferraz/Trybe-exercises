const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// [...]

const findAnimalByName = (name) => new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);

      animal ? resolve(animal) : 
      reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  });

  const getAnimalByAge = (age) => new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.filter((animal) => animal.age === age);

      animal.length > 0 ? resolve(animal) :
      reject(new Error('Nenhum animal com essa idade!'));
    }, 100);
  });

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => (
      findAnimalByName('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      })
    ));
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch((error) => {
        expect(error.message).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});

describe('Testando promise - getAnimalByAge', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => (
      expect(getAnimalByAge(2)).resolves
        .toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }])
      ));
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(3)).rejects
        .toThrowError('Nenhum animal com essa idade!');
    });
  });
});