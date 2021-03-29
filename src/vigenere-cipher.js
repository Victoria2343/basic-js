const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  reverse = true;
  constructor(reverse){
    if(reverse == false){
      this.reverse = false;
    }
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Error');
    let a = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    
    let arrMess = [...message.toUpperCase()];
    let arrKey = [...key.toUpperCase()];
    let pos = 0;

    let res = arrMess.map(el => {
      if (a.includes(el)) {
        let posEl = (a.indexOf(arrKey[pos]) + a.indexOf(el)) % a.length;
        pos = (pos + 1) % arrKey.length;
        return a[posEl];
      }
      return el;
    })
    return this.reverse ? res.join('') : res.reverse().join('');

  }    
  decrypt(message, key) {
    let a = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    
    let arrMess = [...message.toUpperCase()];
    let arrKey = [...key.toUpperCase()];
    let pos = 0;

    let res = arrMess.map(el => {
      if (a.includes(el)) {
        let posEl = (a.indexOf(el) - a.indexOf(arrKey[pos]));
        if (posEl < 0) {
          posEl += a.length;
        }
        pos = (pos + 1) % arrKey.length;
        return a[posEl];
      }
      return el;
    })
    return this.reverse ? res.join('') : res.reverse().join('');

   
  }
}

module.exports = VigenereCipheringMachine;
