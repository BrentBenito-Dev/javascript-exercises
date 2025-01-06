const convertToCelsius = function(temp) {
  temp = (temp - 32 ) / 1.8;
  temp = temp.toFixed(1);
  temp = parseFloat(temp);
  return temp;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 1.8) + 32;
  temp = temp.toFixed(1);
  temp = parseFloat(temp);
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
