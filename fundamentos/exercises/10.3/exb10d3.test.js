const { randomNumber } = require('./exb10d3');

jest.mock('./exb10d3');

describe('01 Tests randomNumber function', () => {
  it('tests if randomNumber() is being called', () => {
    randomNumber.mockImplementation();

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
  });

  it('tests if randomNumber() returns the expected value', () => {
    randomNumber.mockReturnValue(10);

    expect(randomNumber()).toEqual(10);
  });

  it('tests how many times randomNumber() is being called', () => {
    expect(randomNumber).toHaveBeenCalledTimes(2);
  })
})