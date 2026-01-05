let num = 5146282;
let ans = 0;
while (num > 0) {
  str = num % 10;
  num = Math.trunc(num / 10);
  ans = ans * 10 + str;
}
console.log(ans);
