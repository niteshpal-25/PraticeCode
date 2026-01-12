function matchBrackets(str) {
  let stack = [];
  let pairs = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else if (str[i] === ")") {
      if (stack.length > 0) {
        let openIndex = stack.pop();
        pairs.push([openIndex, i]);
      }
    }
  }

  return pairs;
}

// Example usage
let str = "((()())())";
let result = matchBrackets(str);

console.log("Matched pairs (indices):", result);
