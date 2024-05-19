"use strict";

var chunk = function (arr, size) {
  let res = [],
    n = arr.length;
  for (let i = 0; i < n; i += size) {
    res.push(arr.slice(i, Math.min(i + size, n)));
  }
  return res;
};

// Link to the problem: https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
