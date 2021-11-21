"use strict";

const BinaryTree = require("../tree-max");
const Node = require("../node");

describe("Find Max Value In Binary Tree", () => {
  it(" Returns Max Value", () => {
    const a = new Node(10);
    const b = new Node(20);
    const c = new Node(5);
    const d = new Node(35);
    const e = new Node(40);
    const f = new Node(30);
    const g = new Node(8);

    let tree = new BinaryTree(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    expect(tree.findMaxValue()).toBe(40);
  });
});