const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date.length == 0) {
     return 'Unable to determine the time of year!' 
    };
  if (Object.prototype.toString.call(date) === '[object Date]') {
    const month = date.getMonth();
    if (month.length == 0) {
      return 'FAIL'; 
    } else if (month === 0 || month === 1 || month === 11) {
      return 'winter';
    } else if (month === 2 || month === 3 || month === 4) {
      return 'spring';
    } else if (month === 5 || month === 6 || month === 7) {
      return 'summer';
    } else if (month) {
      return 'autumn';
    } 
  }
  else {
    throw new Error();
  }
}
