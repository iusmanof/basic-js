const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY
  ) {
    return false
  } else {
    const k = 0.693 / HALF_LIFE_PERIOD;
    const t = Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / k)
    return t;
  }
};
