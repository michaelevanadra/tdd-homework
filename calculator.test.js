'use strict';

var assert = require('assert');

var calculator = require('./calculator');

describe('Calculator', function() {

  it('should add two numbers', function() {
    assert.equal(calculator.add(), 0);
    assert.equal(calculator.add(1), 1);
    assert.equal(calculator.add(1,1), 2);
    assert.equal(calculator.add(1,1,1,1,1), 5);
    assert.equal(calculator.add(2,2,2,2,2,2,2,2,2,2), 20);
  });

  it('should multiply two numbers', function() {
    assert.equal(calculator.multiply(1,0), 0);
    assert.equal(calculator.multiply(1,1), 1);
    assert.equal(calculator.multiply(1,2), 2);
    assert.equal(calculator.multiply(2,3), 6);
  });

  // test for divide

  it('should get the remainder of two numbers', function() {
    assert.equal(calculator.remainder(1,1), 0);
  });

  it('should add string', function(){
    assert.equal(calculator.addString(""), true);
  });

});
