function merge(arr1, arr2) {
  const newArr = [];
  let indexArr1 = 0,
    indexArr2 = 0;
  while (indexArr2 < arr1.length || indexArr1 < arr2.length) {
    if (arr1[indexArr2] && arr2[indexArr1]) {
      if (arr1[indexArr2] <= arr2[indexArr1]) newArr.push(arr1[indexArr2++]);
      if (arr1[indexArr2] > arr2[indexArr1]) newArr.push(arr2[i++]);
    }
    if (indexArr2 >= arr1.length) newArr.push(arr2[indexArr1++]);
    else if (indexArr1 >= arr2.length) newArr.push(arr1[indexArr2++]);
  }
  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.round(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
console.log(mergeSort([12, 51, 1, 5, 21, 77, 2, 14]));
