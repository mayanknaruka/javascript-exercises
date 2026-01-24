const repeatString = function (word, times) {
  if (times < 0) return "ERROR";

  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }

  return string;
};

// Call the function and print the result
console.log(repeatString("hey", 3));


module.exports = repeatString;