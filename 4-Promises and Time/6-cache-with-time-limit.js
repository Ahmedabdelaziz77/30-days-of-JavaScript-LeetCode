"use strict";

var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  found = false;
  if (this.cache.has(key)) {
    found = true;
    clearTimeout(this.cache.get(key).timeoutId);
  }
  const timeoutId = setTimeout(() => this.cache.delete(key), duration);
  this.cache.set(key, { value, timeoutId });
  return found;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) return this.cache.get(key).value;
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

// Link to the problem: https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
