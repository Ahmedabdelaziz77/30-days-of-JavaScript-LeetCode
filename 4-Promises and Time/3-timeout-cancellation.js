"use strict";

var cancellable = function (fn, args, t) {
  const cancelFn = function () {
    clearTimeout(timer);
  };
  const timer = setTimeout(() => {
    fn(...args);
  }, t);
  return cancelFn;
};

// Link to the problem: https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
