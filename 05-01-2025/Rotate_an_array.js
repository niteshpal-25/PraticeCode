//Rotate an array by k positions.

function Rotate_an_array(arr, k) {
  let n = arr.length;
  k = k % n;

  let result = [];

  for (let i = n - k; i < n; i++) {
    result.push(arr[i]);
  }

  for (let i = 0; i < n - k; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(Rotate_an_array([1, 2, 3, 4, 5], 2));
