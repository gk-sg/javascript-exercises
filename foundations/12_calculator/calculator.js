const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = 0;
	for (num of arr) {
    total += num;
  } 
  return total;
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  arr = [];
  for (let i = a; i > 0; i--) {
    arr.push(i);
  }
  return multiply(arr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
