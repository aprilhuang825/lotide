const findKeyByValue = function(movies, genre) {
  let listofkeys = Object.keys(movies);
  for (const key of listofkeys) {
    if (movies[key] === genre) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


