function twoStrings(s1, s2) {
  let set = new Set(s1);

  for (let ch of s2) {
    if (set.has(ch)) {
      return "YES";
    }
  }
  return "NO";
}

//Given two strings, determine whether they share at least one common substring.
console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));
