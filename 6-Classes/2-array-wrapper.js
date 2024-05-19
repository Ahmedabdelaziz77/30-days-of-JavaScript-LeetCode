"use strict";

var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, val) => acc + val, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join(",")}]`;
};

// Link to the problem: https://leetcode.com/problems/array-wrapper/description/?envType=study-plan-v2&envId=30-days-of-javascript
