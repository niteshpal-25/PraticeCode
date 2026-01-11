let arr = [1, 2, 3, 4, 5];

let new_arr = arr.map((value, index) => {
  return value * 5;
});

console.log("Old Element of Array is: ", arr);
console.log("New Element of Array is: ", new_arr);
