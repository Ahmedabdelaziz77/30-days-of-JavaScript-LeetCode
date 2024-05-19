"use strict";

var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};

// Link to the problem: https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript
