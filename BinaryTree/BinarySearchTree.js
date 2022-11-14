class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const node = new Node(value);
		if (this.root == null) {
			this.root = node;
			return;
		}
		let currentNode = this.root;
		while (true) {
			if (value > currentNode.value) {
				if (currentNode.right == null) {
					currentNode.right = node;
					return
				}
				currentNode = currentNode.right;		
			} else if (value < currentNode.value) {
				if (currentNode.left == null) {
					currentNode.left = node;
					return
				}
				currentNode = currentNode.left;
			}
		}
	}

	lookup(value) {
		if (!this.root) {
			return false;
		}
		if (this.root.value == value) {
			return true
		}
		const currentNode = this.root;
		while (true) {
			if (currentNode.value > value) {
				if 
			}
		}
	}
}

const binarysearch = new BinarySearchTree();
binarysearch.insert(10);
binarysearch.insert(20);
binarysearch.insert(5);
console.log(binarysearch.root);
