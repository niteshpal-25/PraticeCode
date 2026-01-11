//Use map() to square all numbers in an array.

let arr = [2, 4, 6, 8, 10];

let new_arr = arr.map((value, index) => {
  return value * value;
});

console.log("Old Element of Array is: ", arr);
console.log("New Element of Array is: ", new_arr);
