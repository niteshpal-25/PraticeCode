function FindValueInArray(arr, k) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr.length == 0) {
      console.log("Array is empty cannot find any values in Array");
    }
    if (arr[i] == k) {
      return i;
    }
  }
}

let result = FindValueInArray([40, 30, 7, 8, 5], 7);
console.log("Value find in array at index value", result);
