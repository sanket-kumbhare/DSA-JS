class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.front = null;
		this.rear = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.rear) {
			this.rear = newNode;
			this.front = this.rear;
		} else {
			this.rear.next = newNode;
			this.rear = this.rear.next
		}
		this.length += 1;
	}

	pop() {
		this.front = this.front.next;
		this.length -= 1;
	}
}

const queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);
queue.pop();
console.log(queue.rear);
