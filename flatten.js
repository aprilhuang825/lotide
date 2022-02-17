const flatten = function(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newarr.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newarr.push(arr[i][j]);
      }
    }
  }
  return newarr;
};

module.exports = flatten;