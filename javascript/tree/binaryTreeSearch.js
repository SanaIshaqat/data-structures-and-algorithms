"use strict";

const Node = require("./node");
const BinaryTree = require("./binaryTree");

class BinaryTreeSearch extends BinaryTree {
  constructor(root) {
    super(root);
  }

  contains(value) {
    

    let result = false;

    let _contains = (node) => {
      if (node.value == value) result = true;
      if (node.left) _contains(node.left);
      if (node.right) _contains(node.right);
    };

    _contains(this.root, value);
    return result;
  }

  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let temporaryNode = this.root;
      let _search = (value) => {
        let node = new Node(value);
        try {
          if (node.value > temporaryNode.value) {
            if (temporaryNode.right) {
              temporaryNode = temporaryNode.right;
              _search(node);
            } else {
              temporaryNode.right = node;
            }
          }
          if (node.value < temporaryNode.value) {
            if (temporaryNode.left) {
              temporaryNode = temporaryNode.left;
              _search(node);
            } else {
              temporaryNode.left = node;
            }
          }
        } catch {
          return "Something Is Not Right!";
        }
      };
      _search(value);
    }
  }
}

module.exports = BinaryTreeSearch;