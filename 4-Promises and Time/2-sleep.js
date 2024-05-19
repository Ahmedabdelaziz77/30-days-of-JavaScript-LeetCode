"use strict";

async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

// Link to the problem: https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript
