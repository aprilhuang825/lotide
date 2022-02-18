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

module.exports = countLetters;