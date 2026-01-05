let str = "suyDFRTGYU";

let str_newValue = "";
for (i = 0; i <= str.length - 1; i++) {
  let new_value = str[i];
  if (new_value === new_value.toUpperCase()) {
    str_newValue += new_value.toLowerCase();
  } else {
    str_newValue += new_value.toUpperCase();
  }
}
console.log(str_newValue);
