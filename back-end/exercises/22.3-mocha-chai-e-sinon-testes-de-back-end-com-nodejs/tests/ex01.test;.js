const { expect } = require('chai');

const { naturalNum } = require('../ex01.js');

describe('Checks the naturalNum function', () => {
  describe('Checks when the number is natural', () => {
    it('tests if the answer is a string', () => {
      const answer = naturalNum(10);

      expect(answer).to.be.a('string');
    });

    it('tests if the answer is equal to "Positivo"', () => {
      const answer = naturalNum(5);

      expect(answer).to.be.eq('Positivo');
    });
  });

  describe('Checks when the number is not natural', () => {
    it('tests if the answer is a string', () => {
      const answer = naturalNum(-10);

      expect(answer).to.be.a('string');
    });

    it('tests if the answer is equal to "Negativo"', () => {
      const answer = naturalNum(-5);

      expect(answer).to.be.eq('Negativo');
    });
  })

  describe('Checks when the number is neutral', () => {
    it('tests if the answer is a string', () => {
      const answer = naturalNum(0);

      expect(answer).to.be.a('string');
    });

    it('tests if the answer is equal to "Neutro"', () => {
      const answer = naturalNum(0);

      expect(answer).to.be.eq('Neutro');
    });
  })

  describe('Checks when the parameter is not a number', () => {
    it('tests if the answer is a string', () => {
      const answer = naturalNum('not-a-number');

      expect(answer).to.be.a('string');
    });

    it('tests if the answer is "not-a-number não é um número."', () => {
      const answer = naturalNum('not-a-number');

      expect(answer).to.be.eq('not-a-number não é um número.');
    })
  })
})
