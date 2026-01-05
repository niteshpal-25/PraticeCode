function WordCount(str) {
  let Wcount = 1;
  for (let char of str) {
    if (char == " ") {
      Wcount += 1;
    }
  }
  console.log("Total Words in string ", Wcount);
}

WordCount("H e l l o");
