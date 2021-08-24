const { randomNumber } = require('./exb10d3');

jest.mock('./exb10d3');

describe('Tests randomNumber function', () => {
  it('01 tests if randomNumber() is being called, its return and how many times it is being called', () => {
    randomNumber.mockReturnValue(10);

    expect(randomNumber()).toEqual(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });

  it('02 tests if randomNumber() is being called, its return and how many times it is being called', () => {
    randomNumber.mockImplementation((a, b) => a / b);

    expect(randomNumber(20, 2)).toEqual(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(2);
    expect(randomNumber).toHaveBeenCalledWith(20, 2);
  });
})