console.log("First Pattern");
//    *
//   **
//  ***
// ****

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4 - i; j++) {
    row += " ";
  }
  for (let k = 0; k <= i; k++) {
    row += "*";
  }
  console.log(row);
}

// *
// **
// ***
// ****

console.log("Second Pattern");

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

console.log("3rd Pattern");

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4 - i - 1; j++) {
    row += "  ";
  }

  let num = 1;
  for (let k = 0; k <= i; k++) {
    row += num + "   ";
    num = (num * (i - k)) / (k + 1);
  }

  console.log(row);
}
