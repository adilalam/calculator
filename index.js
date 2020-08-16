const { validate } = require("./validate");

module.exports.add = function (a, b) {
  return a + b;
};

module.exports.multiply = function (a, b) {
  return a * b;
};

module.exports.sub = function (a, b) {
  const result = validate(arguments);

  if (result) {
    return result
  }

  if (b > a) {
    return b - a;
  } else {
    return a - b;
  }
};
