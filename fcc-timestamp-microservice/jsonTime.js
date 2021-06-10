var strftime = require('strftime');

function jsonTime(strTime) {
 
  if(isNaN(Number(strTime))) {

    var strDate = new Date(strTime);

    if(isNaN(strDate.getTime()))
      return {unix: null, natural: null};

    return {
      unix: Math.floor(strDate.getTime() / 1000) - (strDate.getTimezoneOffset() * 60),
      natural: strftime('%B %d, %Y', new Date(strTime))
    };

  } else {

    var numDate = new Date(Number(strTime));
    var time = (numDate.getTime() + (numDate.getTimezoneOffset() * 60)) * 1000;

    return {
      unix: strTime,
      natural: strftime('%B %d, %Y', new Date(time)),
    };
  }
}
    
exports.jsonTime = jsonTime;