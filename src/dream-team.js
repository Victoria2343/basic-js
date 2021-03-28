const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];

  if (!Array.isArray(members)) {
    return false;
  }

  for (let i=0; i < members.length; i++ ) {
    if (typeof members[i] === 'string') {
    dreamTeam = members.map(i => i.trim()[0]).sort().join('').toUpperCase();
    } else return false;
    
  }
  
  return dreamTeam;
};
