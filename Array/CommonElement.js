function findCommonElements(arr1, arr2) {
  let set1 = new Set(arr1);
  let common = [];

  for (let value of arr2) {
    if (set1.has(value)) {
      common.push(value);
      set1.delete(value);
    }
  }

  return common;
}

let arr1 = [5, 10, 20, 30, 40, 100, 200];
let arr2 = [1, 2, 30, 5];

console.log(findCommonElements(arr1, arr2));
