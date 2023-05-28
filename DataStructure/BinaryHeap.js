class MaxBinaryHead {
  constructor() {
    this.values = [];
  }

  swap(i1, i2) {
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
  }

  insert(element) {
    this.values.push(element);
    // bubbleUp
    let index = this.values.length - 1;
    let indexPar = Math.floor((index - 1) / 2); // Index của Parrent = Math.floor((INDEX CON - 1) /2)
    while (this.values[index] > this.values[indexPar]) {
      this.swap(index, indexPar);
      index = indexPar;
      indexPar = Math.floor((index - 1) / 2);
    }
    return this.values;
  }

  // Xóa node đầu
  extractMax() {
    this.swap(0, this.values.length - 1);
    this.values.pop();

    // sinkDown
    let index = 0,
      left = 1,
      right = 2;
    while (this.values[index] < this.values[left] || this.values[index] < this.values[right]) {
      if (this.values[left] > !!this.values[right]) {
        this.swap(index, left);
        index = left;
      } else {
        this.swap(index, right);
        index = right;
      }
      // Lấy Index của node con trái và phải
      left = index * 2 + 1;
      right = index * 2 + 2;
      console.log(this.values[left], this.values[right]);
    }
    return this.values;
  }
}

const head = new MaxBinaryHead();
head.insert(72);
head.insert(55);
head.insert(10);
head.insert(5);
head.insert(96);
console.log(head);
head.extractMax();
console.log(head);
