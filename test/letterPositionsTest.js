const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe("#letterPositions", () => {
  it("returns [0] for 'a' in 'a'", () => {
    assert.deepEqual(letterPositions("a").a, [0]);
  });

  it("returns [1] for 'e' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [5] for 'm' in 'good morning'", () => {
    assert.deepEqual(letterPositions("good morning").m, [5]);
  });

});