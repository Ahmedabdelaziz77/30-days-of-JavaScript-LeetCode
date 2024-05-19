"use strict";

var filter = function (arr, fn) {
  return arr.filter((val, idx) => fn(val, idx));
};

// Link to the problem: https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
