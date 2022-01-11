const { expect } = require('chai');

const { naturalNum } = require('../ex01.js');

describe('Checks the naturalNum function', () => {
  describe('Checks when the number is natural', () => {
    const ANSWER = naturalNum(10);

    it('tests if the answer is a string', () => {
      expect(ANSWER).to.be.a('string');
    });

    it('tests if the answer is equal to "Positivo"', () => {
      expect(ANSWER).to.be.eq('Positivo');
    });
  });

  describe('Checks when the number is not natural', () => {
    const ANSWER = naturalNum(-10);

    it('tests if the answer is a string', () => {
      expect(ANSWER).to.be.a('string');
    });

    it('tests if the answer is equal to "Negativo"', () => {
      expect(ANSWER).to.be.eq('Negativo');
    });
  })

  describe('Checks when the number is neutral', () => {
    const ANSWER = naturalNum(0);
    it('tests if the answer is a string', () => {
      expect(ANSWER).to.be.a('string');
    });

    it('tests if the answer is equal to "Neutro"', () => {
      expect(ANSWER).to.be.eq('Neutro');
    });
  })

  describe('Checks when the parameter is not a number', () => {
    const ANSWER = naturalNum('not-a-number');

    it('tests if the answer is a string', () => {
      expect(ANSWER).to.be.a('string');
    });

    it('tests if the answer is "not-a-number não é um número."', () => {
      expect(ANSWER).to.be.eq('not-a-number não é um número.');
    })
  })
})
