'use strict';

/**
 * A function the returns the sum of the value of
 * any number of parameters
 */
exports.add = function() {
  var sum=0;
  if( arguments.length > 0 ){
    for( var arg in arguments ){
      sum += Number( arguments[arg] );
    }
  }
  return sum;
}

exports.multiply = function(val1, val2) {
  return Number(val1) * Number(val2);
}

// behavior for divide

/**
 * Function that accepts to number and returns the remainder
 */
exports.remainder = function( val1, val2 ){
  return Number( val1 ) % Number( val2 );
}

exports.addString = function( str ){
  if (typeof str === "string"){
    var strNumbers = str.split(",");
    var returnValue = 0;
    if ( str.match(/-[0-9]+/g) != null ){
      throw "negatives not allowed";

    } else if ( strNumbers.length > 1 ){
      var i=0;
      while( i < strNumbers.length - 1 ){
        i++;
        strNumbers[i] = Number(strNumbers[i-1]) + Number(strNumbers[i]);
      }
      returnValue = strNumbers[i];

    }else {
      returnValue = strNumbers[0] == "" ? 0 : Number(str);
    }
    return returnValue;
  }
}
