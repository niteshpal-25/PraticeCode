function LargestSmallest(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  let largestElement = 0;
  let smallestElement = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      largestElement = arr[i];
    }
    if (arr[i] < smallest) {
      smallestElement = arr[i];
    }
  }

  console.log("Largest Element of the array is: ", largestElement);
  console.log("Smallest Element of the array is: ", smallestElement);
}

let arr = [20, 50, 80, 40, 7];
LargestSmallest(arr);
