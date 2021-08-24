const { randomNumber, upperCase, firstCharacter, concatStr } = require('./exb10d3');

jest.mock('./exb10d3');

describe('Tests randomNumber()', () => {
  it('01 tests if randomNumber() is being called, its return and how many times it is being called', () => {
    randomNumber.mockReturnValue(10);

    expect(randomNumber()).toEqual(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });

  it('02 after implementation with two parameters tests if randomNumber() is being called, its return and how many times it is being called', () => {
    randomNumber.mockImplementation((a, b) => a / b);

    expect(randomNumber(20, 2)).toEqual(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(2);
    expect(randomNumber).toHaveBeenCalledWith(20, 2);
  });

  it('03 after implementation with three parameters tests if randomNumber() is being called, its return and how many times it is being called', () => {
    randomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(10, 2, 3)).toEqual(60);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(3);
    expect(randomNumber).toHaveBeenCalledWith(10, 2, 3);
  });

  it('03 after reseting and new implementation with three parameters tests if randomNumber() is being called, its return and how many times it is being called', () => {
    randomNumber.mockReset();
    randomNumber.mockImplementation((number) => number * 2);

    expect(randomNumber(10)).toEqual(20);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(10);
  });
});

describe('Tests upperCase(), firstCharacter() and concatStr()', () => {
  it('04 implements upperCase function and tests if it works', () => {
    upperCase.mockImplementation((str) => str.toLowerCase());

    expect(upperCase('TEST UPPERCASE')).toEqual('test uppercase');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith('TEST UPPERCASE');
  });

  it('04 implements firstCharacter function and tests if it works', () => {
    firstCharacter.mockImplementation((str) => str.charAt(str.length - 1));

    expect(firstCharacter('test firstCharacter')).toEqual('r');
    expect(firstCharacter).toHaveBeenCalled();
    expect(firstCharacter).toHaveBeenCalledTimes(1);
    expect(firstCharacter).toHaveBeenCalledWith('test firstCharacter');
  });

  it('04 implements concatStr function and tests if it works', () => {
    concatStr.mockImplementation((strOne, strTwo, strThree) => strOne.concat(strTwo, strThree));

    expect(concatStr('test1', 'test2', 'test3')).toEqual('test1test2test3');
    expect(concatStr).toHaveBeenCalled();
    expect(concatStr).toHaveBeenCalledTimes(1);
    expect(concatStr).toHaveBeenCalledWith('test1', 'test2', 'test3');
  })
})