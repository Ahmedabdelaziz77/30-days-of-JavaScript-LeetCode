"use strict";

var compactObject = function (obj) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      const temp = [];
      for (let x of obj) {
        if (Boolean(x)) {
          temp.push(compactObject(x));
        }
      }
      return temp;
    } else {
      const temp = {};
      for (let x in obj) {
        if (Boolean(obj[x])) {
          temp[x] = compactObject(obj[x]);
        }
      }
      return temp;
    }
  } else return obj;
};

// Link to the problem: https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript
