// Test Function
const eqArrays = function(arr1,arr2) {
  let boo = true;
  if (arr1.length !== arr2.length) {
    boo = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      boo = false;
    }
  }
  return boo;
};

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Actual Function
const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
       results[sentence[i]] = [i];
     }
    }
  }
  return results;
};

// Tests
assertArraysEqual(letterPositions("hello").e, [1]);
