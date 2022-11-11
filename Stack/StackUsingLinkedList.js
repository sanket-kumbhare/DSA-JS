class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top.value
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.top) {
			this.bottom = newNode;
			this.top = this.bottom;
		} else {
			newNode.next = this.top;
			this.top = newNode
		}
		this.length += 1;
	}

	pop() {
		this.top = this.top.next
		this.length -= 1;
	}
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
console.log(stack.peek());