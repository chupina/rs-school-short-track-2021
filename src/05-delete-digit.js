/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const inputStr = n.toString();
  const resultArr = [];
  for (let i = 0; i < inputStr.length; i++) {
    let tmp = inputStr;
    tmp = tmp.slice(0, i) + tmp.slice(i + 1);
    resultArr.push(tmp);
  }
  const result = resultArr.map((el) => parseInt(el, 10));
  return Math.max(...result);
}
module.exports = deleteDigit;
