const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  
  it('should return "2" when inputted "result.length', () => {
    assert.deepEqual(result.length, 2); 
  });
  it('should return ["Lighthouse", "Labs"].join() when inputted result.join()', () => {
    assert.deepEqual(result.join(), ["Lighthouse", "Labs"].join()); 
  });
  it('should return "Lighthouse" when inputted result[0]', () => {
    assert.deepEqual(result[0], "Lighthouse");
  });
  it('should return "Labs" when inputted result[1]', () => {
    assert.deepEqual(result[1], "Labs");
  });
});

