"use strict";

const Stack = require("../stack/stack");

describe("stacks", () => {
  it("Can successfully push onto a stack ", () => {
    const stack = new Stack();

    stack.push("test1");

    expect(stack.top.value).toBe("test1");
    expect(stack.top.next).toBe(null);
  });

  it("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();

    stack.push("test1");
    stack.push("test2");
    stack.push("test3");
    stack.push("test4");

    expect(stack.top.value).toBe("test4");
    expect(stack.top.next.value).toBe("test3");
    expect(stack.top.next.next.value).toBe("test2");
    expect(stack.top.next.next.next.value).toBe("test1");
    expect(stack.top.next.next.next.next).toBe(null);
  });

  it("Can successfully pop off the stack", () => {
    const stack = new Stack();

    stack.push("test1");
    stack.push("test2");
    stack.push("test3");

    expect(stack.pop()).toBe("test3");
  });

  it("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push("test1");
    stack.push("test2");
    stack.push("test3");

    expect(stack.peek()).toBe("test3");
  });

  it("Can successfully instantiate an empty stack ", () => {
    const stack = new Stack();
    expect(stack.top).toBe(null);
  });


});