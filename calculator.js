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
    var sum=0;
    if ( str.match(/-[0-9]+/g) != null ){
      throw "negatives not allowed";

    } else if ( strNumbers.length > 1 ){
      if( strNumbers.length > 0 ){
        for( var ind in strNumbers ){
          sum += Number( strNumbers[ind] );
        }
      }

    }else if( strNumbers[0] != "" ){
      sum = Number(str);
    }
    return sum;

  } else {
    throw "Non string input is not allowed";
  }
}
