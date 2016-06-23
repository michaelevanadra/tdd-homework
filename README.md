# TDD Homework

These simple exercises will guide you through the first steps of writing tests and developing code with TDD. The later tasks get more difficult but try to follow the TDD principles and see how far you can get.

## Intro to TDD

In TDD we write small tests before we write code. Then we write our code and once the test passes we write another test. 

Here's a video introduction to TDD: https://www.youtube.com/watch?v=qmS4ojQ1Pa8 (it's a little slow but good, feel free to skip through or play on 1.5x speed)

### The three rules of TDD

1. You are not allowed to write any code in the application unless it is to make a failing test pass.

2. You are not allowed to write any more of a unit test than is sufficient to fail.

3. You are not allowed to write any more code in the application than is sufficient to make a failing test pass.

## This project

calculator.js - This is the beginings of a simple calculator app. You are building this with TDD. You don't need to run the app, just test it.

calculator.test.js - These are your tests. In TDD the tests describe the behaviour of the app and prove that it works.

## Setup

1. Fork this repository to your own github account (create one for free if you don't already have one).
2. `git clone` the code to your local machine
2. `cd tdd-homework`
3. `npm install`

To run your tests:

`npm test`

## Your tasks

Follow the setup instructions above and run the tests.

Please commit and push your code after each task. Your tasks are as follows:

### 1. Make the first test pass (_should add two numbers_).

If you run `npm test` you will see that we have 1 test and it is failing. This test is in defined in calculator.test.js and looks like this:

```
it('should add two numbers', function() {
  assert.equal(calculator.add(1,1), 2);
});
```

Your job is to add some code to the `add` method in calculator.js to make this test pass. Edit the `add` method and run `npm test` to see if you have succeeded.

### 2. Create the test case for _should multiply two numbers_.

There is an empty test called _should multiply two numbers_ - in calculator.test.js. The test needs to be defined so that it tests the method `multiply` to ensure it wil multiply two numbers correctly.

Define the test for the multiply method and make sure it passes.

### 3. Create a test for a new method `remainder`.

Create a test for a new method `remainder` which will give the remainder after a division of two numbers (modulo). Just write the test, which will fail when you run `npm test`, not the `remaineder` method itself.

### 4. Make the _remainder_ test pass

Now, write a `remainder` method in calculator.js which makes the prevous test pass. Hint: Use the modulo operator.

### 5. Improve the `add` method

Writing tests *first*, improve the add method so that it accepts any number of parameters and adds them together, e.g.

`add(1,1,1,1,1)` returns 5

`add(2,2,2,2,2,2,2,2,2,2)` returns 20

### 6. Use TDD to create a new method `addString`.

Writing tests first and following the 3 rules above, write a new method `addString`. The behavior for this method is described below. Write small tests for each behaviour then make the test pass before writing another test. Go as far as you can and check in your code after each test and each time you pass a test.

The `addString` method should work like this:

1. The method takes one parameter which should be a string.

2. The string can contain 0, 1 or 2 numbers and will return their sum (for an empty string it will return 0). Numbers should be separated with a comma. For example “” or “1” or “1,2”.

    - Start with the simplest test case of an empty string and move to 1 and two numbers
    - Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
    - Remember to refactor after each passing test

3. Improve the `addString` method to take an unknown number of numbers in the string separated by commas, e.g. `addString("1,2,3,4,5")` returns 15

4. If a number is negative, throw an exception "negatives not allowed".




