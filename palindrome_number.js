let check_palidrome = (number) => {
  let reverse = 0;
  let last_number;
  let Original_number = number;
  while (number > 0) {
    last_number = number % 10;
    number = Math.trunc(number / 10);
    reverse = reverse * 10 + last_number;
  }

  if (Original_number === reverse) {
    console.log(`Palindrome ${number}`);
  } else {
    console.log(`Not Palindrome ${number}`);
  }
};

check_palidrome(12321);
check_palidrome(4558);
