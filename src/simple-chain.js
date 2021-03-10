const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],

  getLength() {
    return this.str.length;
  },

  addLink(value) {
    this.str.push("( " + value + " )~~");
    return this;
  },

  removeLink(position) {
    if (position < this.str.length && position > 0) {
      this.str.splice(position - 1, 1);
      return this;
    } else {
      this.str = [];
      throw new Error("Invalid position");
    }
  },

  reverseChain() {
    this.str = this.str.reverse();
    if (this.str[0] == "~~") {
      this.str.shift();
    }
    return this;
  },

  finishChain() {
    //destruct str
    let result = this.str.join("");
    if (result.endsWith("~~")) {
      result = result.slice(0, -2);
    }
    this.str = [];
    return result;
  },
};

module.exports = chainMaker;
