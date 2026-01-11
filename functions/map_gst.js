const prices = [100, 250, 499, 1000];

const PriceWithGST = prices.map((value, index) => {
  return Number(value + value * 0.18).toFixed(2);
});

console.log("Original prices: ", prices);
console.log("After GST (18%): ", PriceWithGST);
