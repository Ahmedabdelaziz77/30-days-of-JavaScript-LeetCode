"use strict";

var addTwoPromises = async function (promise1, promise2) {
  const [a, b] = await Promise.all([promise1, promise2]);
  return a + b;
};

// Link to the problem: https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
