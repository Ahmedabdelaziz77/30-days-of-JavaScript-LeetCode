"use strict";

var flat = function (arr, n) {
  const res = [];
  const solve = (arr, depth) => {
    for (let x of arr) {
      if (Array.isArray(x) && depth < n) {
        solve(x, depth + 1);
      } else {
        res.push(x);
      }
    }
    return res;
  };
  return solve(arr, 0);
};

// Link to the problem: https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
