"use strict";

var timeLimit = function (fn, t) {
  return async function (...args) {
    const fun = fn(...args);

    const timeOut = new Promise(function (_, reject) {
      setTimeout(function () {
        reject("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([fun, timeOut]);
  };
};

// Link to the problem: https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
