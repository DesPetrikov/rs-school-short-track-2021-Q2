/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = n
    .toString()
    .split('')
    .map((el) => +el);
  while (arr.length > 1) {
    const value = arr.reduce((acc, el) => acc + el);
    arr = value
      .toString()
      .split('')
      .map((el) => +el);
  }
  return Number(arr.join(''));
}

module.exports = getSumOfDigits;
