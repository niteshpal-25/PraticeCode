// Reverse a number using arithmetic and recursion.
// Handles negative numbers and removes leading zeros automatically.

function reverseNumberRecursive(n) {
  const sign = Math.sign(n) || 1;
  const num = Math.abs(n);

  function helper(x, acc = 0) {
    if (x === 0) return acc;
    return helper(Math.trunc(x / 10), acc * 10 + (x % 10));
  }

  // Special-case 0 because helper(0) should return 0
  return sign * (num === 0 ? 0 : helper(num, 0));
}

// Tests
console.log(reverseNumberRecursive(5146282)); // 2826415
console.log(reverseNumberRecursive(-1200));   // -21
console.log(reverseNumberRecursive(0));       // 0