"strict mode";

var createCounter = function (n) {
  var cnt = n;
  return function () {
    return cnt++;
  };
};

//link of the question -> https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

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
  the createCounter function creates and returns the increment function. 
  The increment function has access to the count variable declared in its parent function's scope, -> const counter = createCounter();
  even after the createCounter function has finished executing. 
  This is possible because the increment function forms a closure over the count variable.
  When we invoke createCounter(), it returns the increment function, which we assign to the variable counter. 
  Now, every time we call counter(), it increments the count variable and logs the updated value to the console.
  The key concept here is that the increment function maintains a reference to its outer lexical environment (which includes the count variable), allowing it to access and modify that variable even outside of its original scope. 
  This behavior is made possible by closures in JavaScript.
*/
