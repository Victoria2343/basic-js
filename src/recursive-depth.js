const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 0;
    for (let el of arr) {
   if (Array.isArray(el)) {
    max = Math.max(this.calculateDepth(el), max);
   } 
  }
  return max + 1;
}
};