// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(str){
  str = str.split(" ").join("");
  const result = {};
  for(const letter of str){
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

//console.log(countLetters("lighthouse in the house"))
const obj = countLetters('LHL')
assertEqual(obj["L"], 2);
assertEqual(obj["H"], 1);