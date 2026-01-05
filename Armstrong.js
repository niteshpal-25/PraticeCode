//Example: 153 → 1³ + 5³ + 3³ = 153)
function isArmstrong(number) {
  let Original_number = number;
  let sum = 0;
  while (number > 0) {
    let digit = number % 10;
    sum += digit * digit * digit;
    number = Math.floor(number / 10);
  }

  if (sum === Original_number) {
    console.log(Original_number + " is an Armstrong number");
  } else {
    console.log(Original_number + " is not an Armstrong number");
  }
}

isArmstrong(153);
isArmstrong(370);
isArmstrong(123);
