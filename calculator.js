'use strict';

/**
 * A function the returns the sum of two Numbers
 */
exports.add = function( val1, val2 ) {
  return Number(val1) + Number(val2);
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
