"use strict";

var createCounter = function (init) {
  let cur = init;
  return {
    increment: () => ++cur,
    decrement: () => --cur,
    reset: () => (cur = init),
  };
};

// Link to the problem: https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript

/********** Explanation **********/

/*
-- What are Closures? --
In programming, a closure is formed when a function combines with its lexical environment. The lexical environment includes variables that were in scope at the time the closure was created.
In JavaScript, variables have function scope, meaning they are accessible only within the function in which they are defined or any nested functions inside it.
However, when a function is defined inside another function, the inner function forms a closure and retains access to the variables, parameters, and functions of its outer function, even after the outer function has finished executing.
Here's an example to illustrate closures in JavaScript:

function outerFunction() {
  var outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // Accessing the outerVariable from the outer function
  }
  return innerFunction; // Returning the inner function
}

var closure = outerFunction(); // Assigning the inner function to a variable
closure(); // Calling the inner function


-- How to solve this problem? --
  The problem at hand requires us to create a closure functions that accepts a variable called "init". 
  This function returns an object with three functions: "increment", "decrement" and "reset". 

  we want to access the same value for the function either it changes or not that why we will use closures
  we will assign a variable cur to init and this variable will be in the closure.

  The "increment" function increase cur by 1.
  The "decrement" function decrease cur by 1.

  On the other hand, the "reset" function will assign cur again to init

  By utilizing closures and these threefunctions, we can perform comparisons and assertions based on the values provided.

*/
