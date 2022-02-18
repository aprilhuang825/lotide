const findKey = function(object, callback) {
  let listofkeys = Object.keys(object);
  for (const key of listofkeys) {
    if(callback(object[key])){
      return key;
    }
  }
}

module.exports = findKey;

