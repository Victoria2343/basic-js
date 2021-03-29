const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 0,
    separator = '+',
    addition = '',
    additionRepeatTimes = 0,
    additionSeparator = '|'
  } = options;

  let addStr = '';
  let newStr = '';

  if (additionRepeatTimes > 0) {
    addStr = `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length)
  } else {
    addStr = `${addition}${additionSeparator}`.slice(0, -additionSeparator.length);
  }

  if (repeatTimes > 0) {
    newStr = `${str}${addStr}${separator}`.repeat(repeatTimes).slice(0, -separator.length);
  } else {
    newStr = `${str}${addStr}${separator}`.slice(0, -separator.length);
  }

  return newStr;
};
  