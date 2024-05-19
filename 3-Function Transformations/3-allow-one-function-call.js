"use strict";

var once = function (fn) {
  let flag = false;
  return function (...args) {
    if (!flag) {
      flag = true;
      return fn(...args);
    }
  };
};

// Link to the problem: https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript
