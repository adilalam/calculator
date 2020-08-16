module.exports.validate = function(value) {
  if (Object.keys(value).length > 2) {
    return "we accept only two arguments"
  }

  if (Object.keys(value).length < 2) {
    return "Please provide two value to subtract"
  }

  if (typeof Object.values(value)[0] !== 'number') {
    return "Please provide number to calculate"
  }

  if (typeof Object.values(value)[1] !== 'number') {
    return "Please provide number to calculate"
  }
}