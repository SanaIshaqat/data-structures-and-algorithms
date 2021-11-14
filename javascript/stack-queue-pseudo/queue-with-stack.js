'use strict';

let Stack = require('../stack-queue-pseudo/stack');

class PseudoQueue {
  constructor() {
    this.stackPush = new Stack();
    this.stackPop = new Stack();
  }

  enqueue(value) {
    this.stackPush.push(value);
    return this.stackPush.peek();
  }

  dequeue() {
   
    if (this.stackPop.peek() !== "stack is empty") {
      return this.stackPop.pop();
    }

    while (this.stackPush.peek() !== "stack is empty") {
      this.stackPop.push(this.stackPush.pop());
    }
    return this.stackPop.pop();
  }
}
module.exports = PseudoQueue;

