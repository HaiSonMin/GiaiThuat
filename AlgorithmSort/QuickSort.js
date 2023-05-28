function helper(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  console.log(arr);
  return swapIndex;
}

const quickSort = function (arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = helper(arr, left, right);
    console.log(pivotIndex);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};
quickSort([1, 2, 3, 4, 5, 7, 6, 8]);
