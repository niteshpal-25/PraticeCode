// 1  =>  a
// 2  =>  b a b
// 4  =>  d c b a b c d

let Print = (number) => {
  let startvalue = 97;
  let PrintValue = "";

  for (i = startvalue + number - 1; i > startvalue; i--) {
    PrintValue = PrintValue + " " + String.fromCharCode(i);
  }

  for (i = 0; i <= number - 1; i++) {
    PrintValue = PrintValue + " " + String.fromCharCode(startvalue + i);
  }
  console.log(PrintValue);
};

Print(1);
Print(2);
Print(4);
