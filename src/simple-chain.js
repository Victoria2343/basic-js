const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value !== 'undefined') {
      this.chain.push(`( ${value} )`)
    } else {
      this.chain.push('( )');
    }
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.chain.length) {
      this.chain.splice(position-1, 1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
   this.chain.reverse();
   return this;
  },
  finishChain() {
   let res = this.chain.join('~~');
   this.chain.splice(0, this.getLength());
   return res;
  }
};

module.exports = chainMaker;
