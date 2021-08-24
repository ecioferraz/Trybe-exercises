const { randomNumber } = require('./exb10d3');

jest.mock('./exb10d3');

describe('01 Tests randomNumber function', () => {
  it('tests if randomNumber() is being called, returns the expected value and how many times randomNumber() is being called', () => {
    randomNumber.mockReturnValue(10);

    expect(randomNumber()).toEqual(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
})