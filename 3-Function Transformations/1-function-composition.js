"use strict";

var compose = function (functions) {
  return function (x) {
    // for(const fn of functions.reverse()){
    //     x = fn(x);
    // }
    // return x;
    return functions.reduceRight((val, fn) => fn(val), x);
  };
};

// Link to the problem: https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript
