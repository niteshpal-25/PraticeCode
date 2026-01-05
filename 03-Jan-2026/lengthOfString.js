function CountOfString(str) {
  let count = 0;
  let check_space;
  for (char of str) {
    if (char == " ") {
      check_space += 1;
    } else {
      count += 1;
    }
  }
  console.log("Number of Char in given string is: ", count);
}

CountOfString("Hello World");
