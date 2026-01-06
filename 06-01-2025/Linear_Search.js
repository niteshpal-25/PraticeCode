function Linear_Search(arr, value) {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      console.log("Value is found at index", i);
      found = true;
    }
  }
  if (found == false) {
    console.log("Value is not found in array");
  }
}

Linear_Search([10, 45, 78, 60, 90], 100);
