class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const node = new Node(value);
		this.head = node
		this.tail = this.head;
		this.length = 1
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = this.tail.next;
		this.length += 1;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length += 1;
	}

	insert(value, index) {
		const newNode = new Node(value);
		const currentNode = this.getNode(index - 1);
		const nextNode = currentNode.next;
		currentNode.next = newNode;
		newNode.next = nextNode;
		this.length += 1;
	}

	remove(index) {
		const currentNode = this.getNode(index - 1);
		let nextNode = currentNode.next;
		currentNode.next = nextNode.next;
		this.length -= 1;
	}

	getNode(index) {
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	printList() {
		let result = ""
		let currentNode = this.head;
		while (currentNode != null) {
			result += `${currentNode.value}-->`;
			currentNode = currentNode.next;
		}
		console.log(result);
	}
}

let linkedList = new LinkedList(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
linkedList.printList();

linkedList.insert(60, 2);
linkedList.printList();

// linkedList.remove(1);
// linkedList.printList();

// linkedList.remove(2);
// linkedList.printList();