"use strict";

var join = function (arr1, arr2) {
  const res = {};
  for (let i = 0; i < arr1.length; i++) {
    res[arr1[i].id] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (res[arr2[i].id]) {
      for (const key in arr2[i]) {
        res[arr2[i].id][key] = arr2[i][key];
      }
    } else {
      res[arr2[i].id] = arr2[i];
    }
  }
  return Object.values(res);
};

// Link to the problem: https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript
