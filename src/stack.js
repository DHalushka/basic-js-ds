const { NotImplementedError } = require("../extensions/index.js");

class Stack {
	constructor() {
		this.items = [];
	}

	// Adds an element to the stack
	push(element) {
		this.items.push(element);
	}

	// Removes and returns the top element from the stack
	pop() {
		return this.items.pop();
	}

	// Returns the top element without removing it
	peek() {
		return this.items[this.items.length - 1];
	}
}

module.exports = {
	Stack,
};
