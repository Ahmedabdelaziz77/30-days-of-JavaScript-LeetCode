"use strict";

var expect = function (val) {
  return {
    toBe(x) {
      if (x === val) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe(x) {
      if (x === val) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};

// Link to the problem: https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

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
  The problem at hand requires us to create a closure function that accepts a variable called "val". 
  This function returns an object with two functions: "toBe" and "notToBe". 
  These functions also accept a variable "x" as an argument.

  The "toBe" function checks whether "x" is equal to the value of "val". 
  If they are equal, it returns true. Otherwise, it throws an error with the message "Not Equal".

  On the other hand, the "notToBe" function also compares "x" with the value of "val". 
  If they are equal, it throws an error with the message "Equal". Otherwise, it returns true.

  By utilizing closures and these two functions, we can perform comparisons and assertions based on the values provided.

  -- for better understanding
    toBe: (x) => {
      if(x === val) return true;
      throw new Error("Not Equal");
    }
    that is equall to toBe function in my code 
*/
