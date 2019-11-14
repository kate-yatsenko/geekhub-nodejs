const myPow = (num, deg) => {
  let result;

  if (!Number.isInteger(deg)) throw `Invalid degree: ${deg}`;
  else if ((/\D/).test(num) || num < -100  || num > 100) {
    throw `Invalid number: ${num}`;
  }

  if (deg === 0) result = 1;
  else if (deg > 0) result = num * myPow(num, deg - 1);
  else result = 1 / (num * myPow(num, -deg - 1));

  return result.toFixed(5)
};

console.log(myPow(2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));
