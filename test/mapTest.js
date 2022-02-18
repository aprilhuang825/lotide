const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  it("returns ['g', 'c', 't', 'm', 't' ] for (words, word => word[0])", () => {
    assert.deepEqual(map(words, word => word[0]),['g', 'c', 't', 'm', 't']); 
  });

  const numbers = [1, 2, 3, 4];
  it("returns [2, 4, 6, 8] for (numbers, num => num * 2)", () => {
    assert.deepEqual(map(numbers, num => num * 2),[2, 4, 6, 8]); 
  });
});