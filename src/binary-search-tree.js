const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require('../extensions/list-tree.js');
// Assuming you have a Node class that looks something like this:
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
	constructor() {
		this._root = null;
	}

	// Return the root of the tree
	root() {
		return this._root;
	}

	// Add a new node with the given data to the tree
	add(data) {
		const newNode = new Node(data);

		if (!this._root) {
			this._root = newNode;
			return;
		}

		let currentNode = this._root;
		while (currentNode) {
			if (data < currentNode.data) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return;
				}
				currentNode = currentNode.left;
			} else {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return;
				}
				currentNode = currentNode.right;
			}
		}
	}

	// Check if a node with the given data exists in the tree
	has(data) {
		let currentNode = this._root;
		while (currentNode) {
			if (data === currentNode.data) {
				return true;
			}
			if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return false;
	}

	// Find a node with the given data
	find(data) {
		let currentNode = this._root;
		while (currentNode) {
			if (data === currentNode.data) {
				return currentNode;
			}
			if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return null;
	}

	// Remove a node with the given data
	remove(data) {
		this._root = this._removeNode(this._root, data);
	}

	// Helper function to remove a node recursively
	_removeNode(node, data) {
		if (!node) return null;

		if (data < node.data) {
			node.left = this._removeNode(node.left, data);
			return node;
		}

		if (data > node.data) {
			node.right = this._removeNode(node.right, data);
			return node;
		}

		// Node to be deleted
		if (!node.left && !node.right) {
			return null; // No children
		}

		if (!node.left) {
			return node.right; // One child (right)
		}

		if (!node.right) {
			return node.left; // One child (left)
		}

		// Node with two children: get the in-order successor (smallest in the right subtree)
		let minRightNode = this._findMinNode(node.right);
		node.data = minRightNode.data;
		node.right = this._removeNode(node.right, minRightNode.data);
		return node;
	}

	// Find the node with the minimum value
	min() {
		if (!this._root) return null;
		let currentNode = this._root;
		while (currentNode.left) {
			currentNode = currentNode.left;
		}
		return currentNode.data;
	}

	// Find the node with the maximum value
	max() {
		if (!this._root) return null;
		let currentNode = this._root;
		while (currentNode.right) {
			currentNode = currentNode.right;
		}
		return currentNode.data;
	}

	// Helper function to find the minimum node in a given subtree
	_findMinNode(node) {
		while (node.left) {
			node = node.left;
		}
		return node;
	}
}

module.exports = {
	BinarySearchTree,
};
