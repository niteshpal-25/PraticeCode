function CheckSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

let flag = CheckSorted([10, 45, 80, 70, 45]);
if (flag) {
  console.log("Array is sorted");
} else {
  console.log("Array is not sorted");
}
