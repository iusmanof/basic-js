const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  backyard.forEach((element) => {
    element.forEach((el) => {
      if (el == "^^") {
        count++;
      }
    });
  });

  return count;
};
