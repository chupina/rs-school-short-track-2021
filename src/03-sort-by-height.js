/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const skipIdx = [...arr].reduce((acc, el, idx) => {
    if (el === -1) acc.push(idx);
    return acc;
  }, []);

  arr.sort((a, b) => a - b).splice(0, skipIdx.length);
  skipIdx.forEach((idx) => arr.splice(idx, 0, -1));
  return arr;
}

module.exports = sortByHeight;
