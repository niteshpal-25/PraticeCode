function evenOdd(arr) {
  let OddArray = [];
  let EvenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      EvenArray.push(arr[i]);
    } else {
      OddArray.push(arr[i]);
    }
  }
  console.log("Even Array Values : ", EvenArray);
  console.log("Odd Array Values : ", OddArray);
}

let arr = [20, 45, 30, 7, 80];
evenOdd(arr);
