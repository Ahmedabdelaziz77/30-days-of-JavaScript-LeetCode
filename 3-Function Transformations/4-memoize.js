"use strict";

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

// Link to the problem: https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
