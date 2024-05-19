"use strict";

var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    const res = new Array(functions.length);
    let cnt = 0;
    functions.forEach((fn, idx) => {
      fn()
        .then((val) => {
          res[idx] = val;
          cnt++;
          if (cnt == functions.length) resolve(res);
        })
        .catch((err) => reject(err));
    });
  });
};

// Link to the problem: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript
