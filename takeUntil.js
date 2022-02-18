const takeUntil = function(array, callback) {
  let list = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      list.push(array[i]);
    } else {
    return list;
    }
  }
}

module.exports = takeUntil;
