class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	push(element) {
		this.data[this.length] = element;
		this.length += 1;
		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length -= 1;
		return lastItem;
	}

	delete(index) {
		const item = this.data[this.index];
		this.shiftItems(index);
		delete this.data[this.length - 1];
		this.length -= 1;
		return item;
	}

	shiftItems(index) {
		for(let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];	
		}
	}
}

let a = new MyArray();
a.push(10);
a.push(20);
a.push(30);
a.push(40);
a.push(50);
a.push(60);
console.log(a);
a.delete(3)
console.log(a);
