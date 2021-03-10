const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Not array");
  }

  let copyArr = arr.map((x) => x);
  checkFirstElement(copyArr);
  checkLastElement(copyArr);

  let resultArr = [];
  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] === "--double-next") {
      resultArr.push(copyArr[i + 1]);
    } else if (copyArr[i] === "--double-prev") {
      if (copyArr[i - 2] !== "--discard-next") {
        resultArr.push(copyArr[i - 1]);
      }
    } else if (copyArr[i] === "--discard-prev") {
      if (copyArr[i - 2] !== "--discard-next") {
        resultArr.pop();
      }
    } else if (copyArr[i] === "--discard-next") {
      i++;
    } else {
      resultArr.push(copyArr[i]);
    }
  }

  return resultArr;
};

function checkFirstElement(array) {
  return array[0] === "--discard-prev" || array[0] === "--double-prev"
    ? array.splice(0, 1)
    : false;
}

function checkLastElement(array) {
  return array[array.length - 1] === "--discard-next" ||
    array[array.length - 1] === "--double-next"
    ? array.splice(array.length - 1, 1)
    : false;
}
