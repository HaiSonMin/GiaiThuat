class HashTable {
  constructor(size = 52) {
    this.keymap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + val) % this.keymap.length;
    }
    return total;
  }

  set(key, val) {
    const index = this._hash(key);
    console.log(index);
    if (!this.keymap[index]) this.keymap[index] = [];
    this.keymap[index].push([key, val]);
  }

  // Lấy giá trị theo key
  get(key) {
    const index = this._hash(key);
    if (this.keymap[index]) {
      // Ứng với môi vị trí index là 1 mảng
      for (let i = 0; i < this.keymap[index].length; i++) {
        if (this.keymap[index][i][0] === key) return this.keymap[index][i][1];
      }
    }
    return undefined;
  }

  // Lấy tất cả values trong HashTable
  values() {
    const dataValue = [];
    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        for (let j = 0; j < this.keymap[i].length; j++) {
          dataValue.push(this.keymap[i][j][1]);
        }
      }
    }
    return dataValue;
  }

  // Lấy tất cả values trong HashTable
  keys() {
    const dataKeys = [];
    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        for (let j = 0; j < this.keymap[i].length; j++) dataKeys.push(this.keymap[i][j][0]);
      }
    }
    return dataKeys;
  }
}
const hash = new HashTable();
hash.set("son", 61234);
hash.set("so123n", 21232);
hash.set("so2n", 67853);
hash.set("son12", 226);
hash.set("acx", 272);
hash.set("fcvxc", 298792);
hash.set("assds", 08);
hash.set("vas", 6622);
// console.log(hash.get("son"));

console.log(hash.keys());
console.log(hash.values());

