const randomNumber = () => Math.floor(Math.random() * 100);

const upperCase = (str) => str.toUpperCase();

const firstCharacter = (str) => str.charAt(0);

const concatStr = (strOne, strTwo) => strOne.concat(strTwo);

module.exports = {
  randomNumber,
  upperCase,
  firstCharacter,
  concatStr,
};