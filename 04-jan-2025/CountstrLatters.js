function CountStrLetters(str) {
  let letters = 0;
  let digits = 0;
  let specialChar = 0;
  let Space = 0;
  for (let char of str) {
    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      letters++;
    } else if (char >= "0" && char <= "9") {
      digits++;
    } else if (char == " ") {
      Space++;
    } else {
      specialChar++;
    }
  }
  console.log(
    "Total letters: ",
    letters,
    "Total numeric values: ",
    digits,
    "Total Space Are: ",
    Space,
    "Special Chars Are: ",
    specialChar
  );
}

CountStrLetters(
  "If you want, I can also make a version that 1-2 numeric and ignores case and punctuation for letters (like counting only a-z)—which is often asked in string manipulation interview questions."
);
