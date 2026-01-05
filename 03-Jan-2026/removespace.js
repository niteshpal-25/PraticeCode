//hello world => helloworld

let str = "Hello World";
let new_str = "";
for (i = 0; i <= str.length - 1; i++) {
  if (str[i] == " ") {
  } else {
    new_str += str[i];
  }
}
console.log(new_str);
