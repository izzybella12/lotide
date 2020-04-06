const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it('should return [] when inputted [1]', () => {
    assert.deepEqual(middle([1]), []);
  }); 
  it('should return [] when inputted [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  }); 
  it('should return [2] when inputted [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it('should return [3] when inputted [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('should return [2, 3] when inputted [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
  it('should return [3, 4] when inputted [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
