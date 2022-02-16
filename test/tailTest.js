const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  const words = ["Hello", "Lighthouse", "Labs"];

  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2); 
  });

  it("returns 'Lighthouse' for tail(words)[0]", () => {
    assert.strictEqual(tail(words)[0], "Lighthouse");
  });

  it("returns 'Labs' for tail(words)[1]", () => {
    assert.strictEqual(tail(words)[1], "Labs"); 
  });
});