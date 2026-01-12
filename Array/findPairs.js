function findPairs(arr, sum) {
  const seen = new Map();
  const result = [];

  for (let num of arr) {
    const target = sum - num;

    if (seen.has(target)) {
      result.push([target, num]);
    }

    seen.set(num, true);
  }

  return result;
}

console.log(findPairs([1, 5, 7, -1], 8));
