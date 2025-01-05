const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require("../extensions/list-node.js");

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	// Adds a new element to the end of the queue
	enqueue(value) {
		const newNode = new ListNode(value);
		if (this.tail) {
			this.tail.next = newNode;
		}
		this.tail = newNode;
		if (!this.head) {
			this.head = newNode;
		}
	}

	// Removes and returns the front element of the queue
	dequeue() {
		if (!this.head) {
			return null; // or throw an error if the queue is empty
		}
		const value = this.head.value;
		this.head = this.head.next;
		if (!this.head) {
			this.tail = null;
		}
		return value;
	}

	// Returns the linked list representation of the queue
	getUnderlyingList() {
		return this.head;
	}
}

module.exports = {
	Queue,
};
