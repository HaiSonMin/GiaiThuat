class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const nodeRemove = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = nodeRemove.prev;
      nodeRemove.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return nodeRemove;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const nodeRemove = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = nodeRemove.next;
      nodeRemove.next = null;
      this.head.prev = null;
    }
    this.length--;
    return nodeRemove;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let currentNode = this.head;
      while (count++ !== index) currentNode = currentNode.next;
      return currentNode;
    } else {
      let count = this.length - 1;
      let currentNode = this.tail;
      while (count-- !== index) currentNode = currentNode.prev;
      return currentNode;
    }
  }

  // Update val
  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) this.head.val = val;
    else if (index === this.length) this.tail.val = val;
    else {
      const currentNode = this.get(index);
      currentNode.val = val;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    else if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      const nodeRemove = this.get(index);
      const prevNode = nodeRemove.prev;
      prevNode.next = nodeRemove.next;
      nodeRemove.next.prev = prevNode;
      nodeRemove.next = nodeRemove.prev = null;
      this.length--;
      return nodeRemove;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    else if (index === 0) this.unshift(val);
    else if (index === this.length) this.push(val);
    else {
      const newNode = new Node(val);
      const currentNode = this.get(index);
      const prevNode = currentNode.prev;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = currentNode;
      currentNode.prev = newNode;
      this.length++;
    }
    return true;
  }

  reverse() {
    if (this.length === 0) return;
    else if (this.length === 1) return this;
    else {
      const tmpNode = this.head;
      this.head = this.tail;
      this.tail = tmpNode;
      let currentNode = this.head;
      let preNode = null;
      let nextNode = null;
      while (currentNode) {
        nextNode = currentNode.prev;
        currentNode.next = nextNode;
        currentNode.prev = preNode;
        preNode = currentNode;
        currentNode = nextNode;
      }
    }
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
// console.log(doublyLinkedList)
// console.log(doublyLinkedList.remove(0));
// console.log(doublyLinkedList.set(2, 100));
// doublyLinkedList.unshift(15);
// console.log(doublyLinkedList.shift().val);

console.log(doublyLinkedList);
console.log(doublyLinkedList.length);
doublyLinkedList.reverse();
console.log(doublyLinkedList.get(0));
