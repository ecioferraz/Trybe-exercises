const getUserName = require('./ex02e03');

// Ex 02
describe('Check if getUserName returns the user required or an error message', () => {
  it('should return required users name from existing id', () => {
    getUserName(1).then((data) => expect(data).toEqual('Mark'));
  });

  it('should return error from unexisting id', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) =>
      expect(error.message).toEqual('User with 3 not found.'));
  });
});

// Ex 03
describe('Check if getUserName returns the user required or an error message using asyn/await', () => {
  it('should return required users name from existing id', async () => {
    const response = await getUserName(2);
    expect(response).toEqual('Paul');
  });

  it('should return error from unexisting id', async () => {
    expect.assertions(1);
    try {
      const response = await getUserName(3);
    } catch (error) {
      expect(error.message).toEqual('User with 3 not found.');
    }
  });
});