const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof date === 'undefined'){
    return "Unable to determine the time of year!";
  }
       try{
        if (!isNaN(date)) {
        var season;
        const WINTER = [11, 0, 1];
        const SPRING = [2, 3, 4];
        const SUMMER = [5, 6, 7];
        const AUTUMN = [8, 9, 10];
        const YEAR = {WINTER,SPRING,AUTUMN,SUMMER};
        for (const [key, value] of Object.entries(YEAR)) {
            if ( value.includes(date.getMonth())){
                  season = key.toLowerCase();
            }
          }  
        return season;
        }
       }catch(e){
         throw new ErrorEvent(e)
       }
};
