"use strict";

class EventEmitter {
  events = {};
  subscribe(eventName, callback) {
    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = new Set();
    }
    this.events[eventName].add(callback);
    return {
      unsubscribe: () => {
        this.events[eventName].delete(callback);
      },
    };
  }
  emit(eventName, args = []) {
    const res = [];
    (this.events[eventName] || []).forEach((callback) =>
      res.push(callback(...args))
    );
    return res;
  }
}

// Link to the problem: https://leetcode.com/problems/event-emitter/description/?envType=study-plan-v2&envId=30-days-of-javascript
