const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
        this.calculateDepth = this.calculateDepth.bind(this);
    }
  
   calculateDepth (arr) { 
    // if array is empty
    if (arr.length === 0) {
      return 1;
    }
    
    // count deepth
    let count = Array.isArray(arr) ? 
    1 + Math.max(...arr.map(this.calculateDepth)) :
    0;
    
    return count;
  };
}
