function Checkstring(str) {
  let v_count = 0,
    c_count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == " ") {
    } else if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      v_count += 1;
    } else {
      c_count += 1;
    }
  }
  console.log("v_count ", v_count, " c_count ", c_count);
}

Checkstring("The Raining");
