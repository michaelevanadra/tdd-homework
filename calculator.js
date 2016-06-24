'use strict';

/**
 * A function the returns the sum of the value of
 * any number of parameters
 */
exports.add = function() {
  var i=0;
  if( arguments.length > 1 ){
    while( i < arguments.length - 1 ){
      i++;
      arguments[i] = Number(arguments[i-1]) + Number(arguments[i]);
    }
  }
  return arguments[i] | 0;
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
  return typeof str === "string";
}
