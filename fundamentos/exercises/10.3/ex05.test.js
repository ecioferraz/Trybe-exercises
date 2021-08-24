const functions = require('./exb10d3');

it('05 reimplements upperCase function and tests if it works', () => {
  const spiedUpperCase = jest
    .spyOn(functions, 'upperCase')
    .mockImplementation((str) => str.toLowerCase());
  
  expect(spiedUpperCase('TEST UPPERCASE')).toEqual('test uppercase');
  expect(spiedUpperCase).toHaveBeenCalled();
  expect(spiedUpperCase).toHaveBeenCalledTimes(1);
  expect(spiedUpperCase).toHaveBeenCalledWith('TEST UPPERCASE');

  functions.upperCase.mockRestore();

  expect(functions.upperCase('test uppercase')).toEqual('TEST UPPERCASE');
});