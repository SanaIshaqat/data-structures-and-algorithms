
"use strict";

const Node = require("../node");

describe("node module test", () => {
  it("create a Node with value and next", () => {
    const testValue = "test";
    const node = new Node(testValue);
    expect(node.value).toBe(testValue);
    expect(node.next).toBeNull();
    expect(node).toBeInstanceOf(Node);
  });
});