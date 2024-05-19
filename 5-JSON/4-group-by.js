"use strict";

Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, val) => {
    const key = fn(val);
    acc[key] = acc[key] || [];
    acc[key].push(val);
    return acc;
  }, {});
};

// Link to the problem: https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
