//Convert a string to uppercase without using built-in functions.
//65-90

function ConvertUppercase(str) {
  let result = " ";
  for (let i = 0; i <= str.length - 1; i++) {
    code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }
  console.log(result);
}

ConvertUppercase("hellow world");
