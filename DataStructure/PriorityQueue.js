class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class MaxBinaryHead {
  constructor() {
    this.values = [];
  }

  swap(i1, i2) {
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    // bubbleUp
    let parrent = this.values.length - 1;
    let parrentPar = Math.floor((parrent - 1) / 2); // parrent của Parrent = Math.floor((parrent CON - 1) /2)
    while (this.values[parrent]?.priority > this.values[parrentPar]?.priority) {
      this.swap(parrent, parrentPar);
      parrent = parrentPar;
      parrentPar = Math.floor((parrent - 1) / 2);
    }
    return this.values;
  }

  // Xóa node đầu
  dequeue() {
    this.swap(0, this.values.length - 1);
    this.values.pop();
    console.log(this.values);

    // sinkDown
    let parrent = 0,
      left = 1,
      right = 2;
    let priorityPar = this.values[parrent].priority;
    let priorityLeft = this.values[left]?.priority;
    let priorityRight = this.values[right]?.priority;

    while (priorityPar < priorityLeft || priorityPar < priorityRight) {
      console.log(this.values)
      if (priorityLeft > !!priorityRight) {
        this.swap(parrent, left);
        parrent = left;
      } else {
        this.swap(parrent, right);
        parrent = right;
      }
      // Lấy parrent của node con trái và phải
      left = parrent * 2 + 1;
      right = parrent * 2 + 2;
      priorityLeft = this.values[left]?.priority;
      priorityRight = this.values[right]?.priority;
    }
    return this.values;
  }
}

const head = new MaxBinaryHead();
head.enqueue(72, 12);
head.enqueue(55, 1);
head.enqueue(10, 23);
head.enqueue(100, 3);
head.enqueue(10, 93);
head.enqueue(5, 13);
head.enqueue(96, 0);
console.log(head);
head.dequeue();
console.log(head);
