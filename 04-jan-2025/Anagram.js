// Problem: "listen" & "silent" → true
// Hint: Sort both strings and compare.

function CheckAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    console.log("string are must be same");
  } else {
    sortedStr1 = str1.split("").sort().join("");
    sortedStr2 = str2.split("").sort().join("");

    if (sortedStr1 === sortedStr2) {
      console.log("The strings are anagrams.");
    }
  }
}

let string1 = "listen";
let string2 = "silent";
CheckAnagram(string1, string2);
