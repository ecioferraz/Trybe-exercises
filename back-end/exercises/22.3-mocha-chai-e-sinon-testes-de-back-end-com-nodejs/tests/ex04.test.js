const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const { writeOnFile } = require('../ex04');

describe('Checks if the writeOnFile function works correctly', () => {
  beforeEach(() => sinon.stub(fs, 'writeFileSync'));
  afterEach(() => sinon.restore());

  describe('Checks if the answer is correct', () => {
    const ANSWER = writeOnFile('file.txt', 'File content');

    it('tests if the answer is a string', () => {
      expect(ANSWER).to.be.a('string');
    });

    it('tests if the answer is "ok', () => {
      expect(ANSWER).to.be.eq('ok');
    });
  });
});
