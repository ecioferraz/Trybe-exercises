const uppercase = require('./ex01');

it('should return "anything" as "ANYTHING"', (done) => {
  uppercase('anything', (str) => {
    try {
      expect(str).toBe('ANYTHING');
      done();
    } catch (error) {
      done(error);
    }
  });
});