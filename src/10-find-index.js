/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let min = 0;
  let max = array.length;
  let mid = Math.floor((min + max) / 2);
  while (array[mid] !== value && min <= max) {
    if (value > array[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
    mid = Math.floor((min + max) / 2);
  }
  if (array[mid] === value) {
    return mid;
  }
  return 'not found';
}

module.exports = findIndex;
