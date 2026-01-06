function Reverse(arr) {
  console.log("Old Array is :", arr);
  temp = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  console.log("New Array is :", arr);
}

let arr = [20, 45, 15, 7, 90];
Reverse(arr);
