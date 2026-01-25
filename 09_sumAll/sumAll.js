const sumAll = function(a, b) {
  // Make sure a <= b
  if (a > b) {
    [a, b] = [b, a]; // swap
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
};

// Test
console.log(sumAll(1, 4)); // 10
console.log(sumAll(4, 1)); // 10 (order doesn't matter)


// Do not edit below this line
module.exports = sumAll;
