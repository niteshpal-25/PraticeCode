let arr = [50, 45, 30, 60, 90];
let Result = (arr) => {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;

  console.log("Sum of array values are:", sum);
  console.log("Average of array element is:", avg);
};

Result(arr);
