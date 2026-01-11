function divisibleSumPairs(n, k, arr) {
  let count = 0;
  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((arr[i] + arr[j]) % k === 0) {
        count++;
        result.push({
          indices: [i, j],
          values: [arr[i], arr[j]],
          sum: arr[i] + arr[j],
        });
      }
    }
  }

  return { count, result };
}

let arr = [1, 3, 2, 6, 1, 2];
let k = 5;

let output = divisibleSumPairs(arr.length, k, arr);
console.log(output.count);
console.log(output.result);
