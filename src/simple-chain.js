const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('( '+value+' )')
    return this;
  },
  removeLink(position) {
    
  },
  reverseChain() {
   
  },
  finishChain() {
   
  }
};

module.exports = chainMaker;
