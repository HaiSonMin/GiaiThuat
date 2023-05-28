class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) this.first = this.last = newNode;
    else {
      const tmp = this.first;
      this.first = newNode;
      this.first.next = tmp;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return undefined;
    const node = this.first;
    this.first = this.first.next;
    if (this.first === this.last) this.last = null;
    this.size--;
    return node.val;
  }
}

// const stack = new Stack();
// stack.push(2).push(190);
// console.log(stack);
// const node = stack.pop();
// console.log(node);

// console.log(stack);
