function rearrangeAlternate(arr) {
  let pos = arr.filter((x) => x >= 0);
  let neg = arr.filter((x) => x < 0);
  let result = [];
  let i = 0,
    j = 0;

  while (i < pos.length && j < neg.length) {
    result.push(pos[i++]);
    result.push(neg[j++]);
  }

  while (i < pos.length) {
    result.push(pos[i++]);
  }

  while (j < neg.length) {
    result.push(neg[j++]);
  }

  return result;
}

let arr = [1, 2, 3, -4, -1, 4];
console.log(rearrangeAlternate(arr));
