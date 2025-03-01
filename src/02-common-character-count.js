/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str2 = s2;
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    const idx = str2.indexOf(s1[i]);
    if (!(idx === -1)) {
      counter++;
      str2 = str2.slice(0, idx) + str2.slice(idx + 1);
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
