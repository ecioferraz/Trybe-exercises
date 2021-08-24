const { fetchDog } = require('./ex06');

jest.mock('./ex06');

describe('Tests the fetchDog function', () => {
  afterEach(() => fetchDog.mockRestore());

  it('tests if fetchDog function works when successful', async () => {
    fetchDog.mockResolvedValue({
      message: "https://images.dog.ceo/breeds/greyhound-italian/n02091032_4731.jpg",
      status: "success"
  });

    await expect(fetchDog()).resolves.toEqual({
      message: "https://images.dog.ceo/breeds/greyhound-italian/n02091032_4731.jpg",
      status: "success"
  });
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });

  it('tests if fetchDog function throws error when rejected', async () => {
    fetchDog.mockRejectedValue('Request unsuccesful');
    
    await expect(fetchDog()).rejects.toEqual('Request unsuccesful');
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });
});