"use strict";

var cancellable = function (fn, args, t) {
  fn(...args);
  const timer = setInterval(() => fn(...args), t);
  const cancelFn = () => clearInterval(timer);
  return cancelFn;
};

// Link to the problem: https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
