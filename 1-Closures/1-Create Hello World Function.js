"strict mode";

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};
//link of the question -> https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
////////// Explaination \\\\\\\\\\
/*
--What is Closures ?
  In programming, a closure is a combination of a function and its lexical environment. 
  The lexical environment consists of any variables that were in scope at the time the closure was created.
  In JavaScript, variables have function scope, which means that they are accessible only within the function in which they are defined or any nested functions inside it.
  However, when a function is defined inside another function, the inner function forms a closure and has access to the variables, parameters, and functions of its outer function, even after the outer function has finished executing.
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


--How to solve this problem ?
  in this problem he wants you to only return a closure always return a hello world .  
*/
