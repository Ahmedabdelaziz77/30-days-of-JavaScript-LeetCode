"use strict";

Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

// Link to the problem: https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript
