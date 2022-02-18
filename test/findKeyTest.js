const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey",() => {
  const result = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it("returns 'noma' for x => x.stars === 2", () => {
    assert.strictEqual(findKey(result, x => x.stars === 2), "noma");
  });

  it("returns 'Blue Hill' for x => x.stars === 1", () => {
    assert.strictEqual(findKey(result, x => x.stars === 1), "Blue Hill");
  });
})