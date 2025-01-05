const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require('../extensions/list-node.js');
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 */
function removeKFromList(l, k) {
	// Create a dummy node to handle edge cases like removing the head
	let dummy = new ListNode(0);
	dummy.next = l;
	let current = dummy;
	// Traverse the list
	while (current.next !== null) {
		if (current.next.value === k) {
			// Skip the node with value k
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}
	// Return the modified list starting from the original head
	return dummy.next;
}

module.exports = {
	removeKFromList,
};
