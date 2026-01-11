function plusMinus(arr) {
  const n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let num of arr) {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  console.log((positive / n).toFixed(2));
  console.log((negative / n).toFixed(2));
  console.log((zero / n).toFixed(2));
}

plusMinus([1, -2, 0, 3, -1]);
