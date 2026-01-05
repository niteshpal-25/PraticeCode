function CheckFibo(number) {
  return (
    Fun_Calculate_fibo(5 * number * number + 4) ||
    Fun_Calculate_fibo(5 * number * number - 4)
  );
}

function Fun_Calculate_fibo(x) {
  let value = Math.floor(Math.sqrt(x));
  return value * value === x;
}

console.log(CheckFibo(8));
