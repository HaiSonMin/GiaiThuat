class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingelLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add after
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Remove after
  pop() {
    if (!this.head) return undefined;
    else {
      let currentNode = this.head;
      let newTail = currentNode;
      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }
      newTail.next = null;
      this.tail = newTail;
      this.length--;
      if (this.length === 0) this.head = this.tail = null;
    }
    return this;
  }

  // Add begin
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Remove begin
  shifl() {
    if (!this.head) return undefined;
    else {
      const nodeRemove = this.head;
      this.head = this.head.next;
      nodeRemove.next = null;
      this.length--;
      if (this.length === 0) this.head = this.tail = null;
    }
    return this;
  }

  // Get with index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    else {
      let count = 0;
      let currentNode = this.head;
      while (count++ !== index) currentNode = currentNode.next;
      return currentNode;
    }
  }

  // Add with index
  set(index, val) {
    if (index < 0 || index > this.length) return undefined;
    else {
      if (index === 0) this.unshift(val);
      else if (index === this.length) this.push(val);
      else {
        const newCode = new Node(val);
        const preNode = this.get(index - 1);
        newCode.next = preNode.next;
        preNode.next = newCode;
        this.length++;
      }
    }
    return this;
  }

  // Remove with index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    else {
      if (index === 0) this.shifl();
      else if (index === this.length - 1) this.pop();
      else {
        const removeNode = this.get(index);
        const preNode = this.get(index - 1);
        preNode.next = removeNode.next;
        removeNode.next = null;
        this.length--;
      }
    }
    return this;
  }

  reverse() {
    if (!this.head) return null;
    else {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let currentNode = this.tail;
      let preNode = null;
      let nextNode = null;
      while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = preNode;
        preNode = currentNode;
        currentNode = nextNode;
      }
      return this;
    }
  }
}
const list = new SingelLinkList();
list.push(61);
list.push(12);
list.push(722);
// list.unshift(90);
// console.log(list);
// console.log(list.reverse());

// console.log(list.set(2,41));
// console.log(list.get(2));
// console.log(list.remove(2));
// list.pop();
// list.shifl();
// console.log(list);
