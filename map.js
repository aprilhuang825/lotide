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

const words = ["ground", "control", "to", "major", "tom"];
// Method 1
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);

// Method 2
const results2 = words.map(word => word[0]);

// Method 3
const results3 = words.map(function(word) {
  return word[0];
});


assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results3,[ 'g', 'c', 't', 'm', 't' ]);