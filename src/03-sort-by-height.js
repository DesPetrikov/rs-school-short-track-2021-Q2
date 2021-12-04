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
  const newArr = [];
  const filterArr = arr.filter((el) => el !== -1).sort((a, b) => b - a);
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === -1) {
      newArr.push(-1);
    } else {
      newArr.push(filterArr[filterArr.length - 1]);
      filterArr.pop();
    }
    index++;
  }
  return newArr;
}

module.exports = sortByHeight;
