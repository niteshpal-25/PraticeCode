function findMedian(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  const n = arr.length;
  const mid = Math.floor(n / 2);

  if (n % 2 !== 0) {
    return arr[mid];
  } else {
    return (arr[mid - 1] + arr[mid]) / 2;
  }
}

console.log(findMedian([4, 1, 2, 3, 5]));
