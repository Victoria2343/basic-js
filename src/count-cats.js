const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const cats = backyard.flat().filter(el => el === '^^');
  if (cats.length === 0) { 
    return 0;
  } else {
      return cats.length;
    }
  
};
