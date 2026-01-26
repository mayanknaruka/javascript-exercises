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

console.log(sumAll(1, 5)); // 10
console.log(sumAll(4, 2)); // 10 (order doesn't matter)


// const sumAll = function(a,b){
//    if(a>b){
//     [a,b] = [b,a];
//    }
//    let sum = 0
//    for(let i = a; i<=b; i++ ){
//     sum+=i
//    }
//    return sum 
// }

// Do not edit below this line
module.exports = sumAll;
