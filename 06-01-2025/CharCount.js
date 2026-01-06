function CharCount(str) {
  //in this example i need to check how many times each char is repeted.
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
}

CharCount("Vishal pal");
