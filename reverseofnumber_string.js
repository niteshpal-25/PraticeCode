// Reverse a number using string/array helpers.
// Handles negative numbers and drops leading zeros in the reversed result (e.g. 1200 -> 21).

function reverseNumberString(n) {
  const sign = Math.sign(n) || 1;
  const reversedStr = Math.abs(n).toString().split('').reverse().join('');
  return sign * parseInt(reversedStr, 10);
}

// Tests
console.log(reverseNumberString(5146282)); // 2826415
console.log(reverseNumberString(-1200));   // -21
console.log(reverseNumberString(0));       // 0