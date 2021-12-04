/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  if (!l) {
    return l;
  }
  let m = l;
  while (m.value === k) {
    m = m.next;
  }
  let current = m;
  let nextNode = current.next;
  while (nextNode) {
    if (nextNode.value === k) {
      current.next = nextNode.next;
      if (!nextNode.next) break;
    }
    current = current.next;
    nextNode = current.next;
  }
  return m;
}

module.exports = removeKFromList;
