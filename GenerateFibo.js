function GenerateFibo(number) {
  let start = 0;
  let end = 1;
  let increament = 0;
  let sum = 0;
  for (i = 0; i <= number; i++) {
    //console.log(start);
    sum += start;
    increament = start + end;
    start = end;
    end = increament;
  }
  console.log("Sum of first " + number + " Fibonacci numbers is: " + sum);
}

GenerateFibo(10);
