let check_palidrome = (name) => {
  let reverse = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reverse += name[i];
  }
  if (name == reverse) {
    console.log(`Palindrome ${name}`);
  } else {
    console.log(`Not Palindrome ${name}`);
  }
};

check_palidrome("nitesh");
check_palidrome("nitin");
