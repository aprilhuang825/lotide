const middle = function(array) {
  let midstr = array.length / 2;
  let midarr = [];
  if (array.length <= 2) {
    return midarr;
  } else if (array.length % 2 !== 0) {
    midarr.push(array[Math.floor(midstr)]);
  } else if (array.length % 2 === 0) {
    midarr.push(array[midstr - 1]);
    midarr.push(array[midstr]);
  }
  return midarr;
};

module.exports = middle;