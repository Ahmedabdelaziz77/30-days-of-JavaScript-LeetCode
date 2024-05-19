"use strict";

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

// Link to the problem: https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
