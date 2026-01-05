function longest_word(str) {
  let words = str.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  console.log(longest);
}

longest_word("Welcome to world of javascript");
