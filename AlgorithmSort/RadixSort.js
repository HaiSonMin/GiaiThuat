function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigit(arrNum) {
  let maxDigit = 0;
  for (let i = 0; i < arrNum.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(arrNum[i]));
  }
  return maxDigit;
}

function RadixSort(arrNum) {
  let maxDigitCount = mostDigit(arrNum);
  console.log(maxDigitCount);
  for (let i = 0; i < maxDigitCount; i++) {
    // Tạo 1 mảng có độ dài bằng với arrNum, mỗi phần tử là 1 mảng trống
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arrNum.length; j++) {
      const digit = getDigit(arrNum[j], i);
      digitBuckets[digit].push(arrNum[j]);
    }
    // Phân giải mảng
    // console.log(...digitBuckets);
    arrNum = [].concat(...digitBuckets);
    console.log(arrNum);
  }
  return arrNum;
}
console.log(RadixSort([112, 2, 312, 5, 4515, 0, 9, 80]));

let data = [];
const tmp = [
  [123, 321],
  [32, 4],
  [123, 5311],
];
data = [].concat(...tmp)
console.log(data)
