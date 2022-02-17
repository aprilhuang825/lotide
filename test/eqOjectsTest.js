const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const x1 = { a: { z: 1 }, b: 2 }
const x2 = { a: { y: 0, z: 1 }, b: 2 }
const x3 = { a: 1, b: 2 }

describe("#eqOjects", () => {
  it("returns true for eqObjects(ab, ba)", () => {
    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns false for eqObjects(ab, abc)", () => {
    assert.isFalse(eqObjects(ab, abc));
  });

  it("returns true for eqObjects(cd, dc)", () => {
    assert.isTrue(eqObjects(cd, dc));
  });

  it("returns false for eqObjects(cd, cd2)", () => {
    assert.isFalse(eqObjects(cd, cd2));
  });

  it("returns true for eqObjects(x1, x1)", () => {
    assert.isTrue(eqObjects(x1, x1));
  });

  it("returns false for eqObjects(x1, x2)", () => {
    assert.isFalse(eqObjects(x1, x2));
  });

  it("returns false for eqObjects(x2, x3)", () => {
    assert.isFalse(eqObjects(x2, x3));
  });

});
