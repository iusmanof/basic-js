const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity == "number" &&
    sampleActivity instanceof Number &&
    +sampleActivity < 15 &&
    sampleActivity > 0
  ) {
    const k = 0.693 / 5730;
    const t = Math.ceil(Math.log(15 / +sampleActivity) / k);
    return t;
  } else {
    return false;
  }
};
