const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ?
  members.filter(word => typeof word == "string" )
                .map(function(e){return e.trim();})
                .map(el => el[0].toUpperCase())
                .sort()
                .join("")
: false;
};
