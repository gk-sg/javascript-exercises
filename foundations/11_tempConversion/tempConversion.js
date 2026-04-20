const convertToCelsius = function(degreesFahrenheit) {
  let degreesCelsius = (degreesFahrenheit - 32) * 5/9;
  if (degreesCelsius !== 0) {
    return Number(degreesCelsius.toFixed(1));
  } else {
    return 0;
  }
};

const convertToFahrenheit = function(degreesCelsius) {
  let degreesFahrenheit = degreesCelsius * 9/5 + 32;
  if (degreesFahrenheit !== 0) {
    return Number(degreesFahrenheit.toFixed(1));
  } else {
    return 0;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
