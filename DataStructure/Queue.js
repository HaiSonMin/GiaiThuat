class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) this.first = this.last = newNode;
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;
    const node = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next
    this.size--;
    return node.val;
  }
}

// const queue = new Queue();
// queue.enqueue(10).enqueue(20).enqueue(30);
// const node = queue.dequeue();
// // const node2 = queue.dequeue();
// console.log(node);
// // console.log(node2);
// console.log(queue);
// console.log(queue);
