/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return '';
  let separation = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      separation += str[i];
    } else {
      separation += `${str[i]}-`;
    }
  }
  return separation
    .slice(0, -1)
    .split('-')
    .map((el) => {
      if (el.length > 1) return `${el.length}${el[0]}`;
      return `${el[0]}`;
    })
    .join('');
}

module.exports = encodeLine;
