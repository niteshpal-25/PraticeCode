function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let j = 0;
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      j++;
      arr[j] = arr[i];
      result.push(arr[i]);
    }
  }
  return { result };
}

let arr = [10, 10, 20, 20, 30, 40, 40];
let newLength = removeDuplicates(arr);

console.log("Array without duplicates:", newLength.result);
console.log("Array without duplicates have length:", newLength.result.length);
