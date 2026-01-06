function largestElement(arr) {
  let smallest = arr[0];
  let largest = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log("Smallest:", smallest);
  console.log("Largest:", largest);
}

largestElement([50, 78, 90, 45, 30]);
