class Node {
	constructor(value) {
		this.value = value;
		this.previous = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		const node = new Node(value);
		this.head = node;
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		newNode.previous = this.tail;
		this.tail = this.tail.next;
		this.length += 1;
	}

	prepend(value) {
		const newNode = new Node(value);
		this.head.previous = newNode;
		newNode.next = this.head;
		this.head = newNode;
		this.length += 1;
	}

	insert(value, index) {
		const newNode = new Node(value);
		let currentNode = this.getNode(index - 1);
		let nextNode = currentNode.next;
		currentNode.next = newNode;
		newNode.previous = currentNode;
		newNode.next = nextNode;
		nextNode.previous = newNode;
		this.length += 1;
	}

	remove(index) {
		let currentNode = this.getNode(index - 1);
		let nextNode = currentNode.next
		currentNode.next = nextNode.next
		nextNode.next.previous = currentNode;
		this.length -= 1;
	}

	getNode(index) {
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next
		}
		return currentNode;
	}
	
	printList(mode = 1) {
		let result = "";
		let currentNode = this.head;
		while (currentNode != null) {
			result += `${currentNode.value}<-->`;
			currentNode = currentNode.next;
		}
		console.log(result);
	}
}

const dll = new DoublyLinkedList(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.append(50);
// console.log(dll)
dll.printList();
dll.insert(5, 3)
dll.printList();
dll.remove(2);
dll.printList();


// console.log(dll)