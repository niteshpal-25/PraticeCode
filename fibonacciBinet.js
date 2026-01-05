function PrintSumOfFibo(number) {
  const sqrtOf5 = Math.sqrt(5);
  const phi = (1 + sqrtOf5) / 2;
  const psi = (1 - sqrtOf5) / 2;

  const result = Math.round(Math.pow(phi, number) - Math.pow(psi, number));
  console.log(result);
}

PrintSumOfFibo(5);
