function CharCount(str) {
  //in this example i need to check how many times each char is repeted.
  // First Way..
  let values = {};
  for (char of str) {
    if (char == " ") {
      continue;
    }
    if (values[char] === undefined) {
      values[char] = 1;
    } else {
      values[char] += 1;
    }
  }
  console.log(values);

  // Second Way..
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] in values) {
      values[str[i]]++;
    } else {
      values[str[i]] = 1;
    }
  }
  console.log(values);
}

CharCount("Vishal pal");
