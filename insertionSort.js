function insertionSort(arr) {
  let currentVal, i, j;
  for (i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  console.log(arr);
  return arr;
}

insertionSort([2, 1, 7, 5, 9, 4, 3, 6, 8, 10]);
