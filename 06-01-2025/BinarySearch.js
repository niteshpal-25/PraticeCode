function BinarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  if (arr.length <= 0) {
    console.log("Array is empty");
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const result = BinarySearch([10, 45, 50, 80, 90], 40);

if (result !== -1) {
  console.log("Value found at index:", result);
} else {
  console.log("Value not found");
}
