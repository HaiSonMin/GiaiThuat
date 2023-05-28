class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let current = this.root;
      while (true) {
        if (val >= current.val) {
          if (current.right === null) {
            current.right = newNode;
            break;
          } else current = current.right;
        } else {
          if (current.left === null) {
            current.left = newNode;
            break;
          } else current = current.left;
        }
      }
    }
    return this;
  }

  find(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return true;
      currentNode = val > currentNode.val ? currentNode.right : currentNode.left;
    }
    return false;
  }

  // Left to Right
  BFS() {
    let node = this.root;
    const queue = [];
    const data = [];
    queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Root Left Right
  // Dùng đệ qui
  DFSPreOrderRecursion() {
    let currentNode = this.root;
    const data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(currentNode);
    return data;
  }

  // Khử đệ qui
  DFSPreOrderNotRecursion() {
    let node = this.root;
    const stack = [];
    const data = [];
    stack.push(node);
    while (stack.length) {
      node = stack.pop();
      data.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return data;
  }

  // Left Right Root
  // Dùng đệ qui
  DFSPostOrderRecursion() {
    const currentNode = this.root;
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(currentNode);
    return data;
  }

  // Khử đệ qui
  DFSPostOrderNotRecursion() {
    let currentNode = this.root;
    const stack = [];
    const data = [];
    stack.push(currentNode);
    let checkPush = false;
    let checkContain = false;
    while (stack.length) {}
    return data;
  }

  // Left Root Right
  // Dùng đệ qui
  DFSInOrderRecursion() {
    const currentNode = this.root;
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(currentNode);
    return data;
  }

  // Khử đệ qui
  DFSInOrderNotRecursion() {
    let currentNode = this.root;
    const stack = [];
    const data = [];
    stack.push(currentNode);
    let checkPush = false;
    let checkContain = false;
    while (stack.length) {}
    return data;
  }
}

const binaryTree = new BinarySearchTree();
binaryTree.insert(10);
binaryTree.insert(6);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(8);
binaryTree.insert(20);
// console.log(binaryTree.BFS());
// console.log(binaryTree.DFSPreOrderRecursion());
// console.log(binaryTree.DFSPreOrderNotRecursion());
console.log(binaryTree.DFSPostOrderRecursion());
console.log(binaryTree.DFSInOrderRecursion());
