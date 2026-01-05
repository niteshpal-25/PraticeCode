function CheckPrime(number) {
  if (number <= 1) {
    console.log("Not Prime number");
    return;
  }

  if (number === 2) {
    console.log("Prime number");
    return;
  }

  if (number % 2 === 0) {
    console.log("Not Prime number");
    return;
  }

  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      console.log("Not Prime number");
      return;
    }
  }

  console.log("Prime number");
}

CheckPrime(5);
