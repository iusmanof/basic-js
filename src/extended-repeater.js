const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // data of task
  let s = str;
  let orT = options.repeatTimes;
  
  // default os = +
  let os = options.separator ? options.separator : "+";
  // default oa = empty
  let oa;
  if (options.addition === false || options.addition === null || options.addition){
    oa = options.addition;
  }else{
    oa = '';
  }
  
  let oarT = options.additionRepeatTimes;
  // default oaS = |
  let oaS = options.additionSeparator ? options.additionSeparator  : "|";;
  
  let result;
  let firstStageResult; 
  let secondStageResult;
 
  firstStageResult = univeralRepeator(s, os, orT) + s;
  // check undefined of secondStageResult
  secondStageResult = univeralRepeator(oa, oaS, oarT) + oa;
  // console.log(secondStageResult);
  let p = s + secondStageResult;
  result = univeralRepeator(p , os, orT) + s + secondStageResult; 

  return result;
};
  
function univeralRepeator(str , sep , count){
  return Array(count).join(str + sep );
}
