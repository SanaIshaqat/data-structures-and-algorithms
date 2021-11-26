'use strict';
const Node = require('./node');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  adds(value) {
    let myNode = new Node(value);
    if (this.root === null) {
      this.root = myNode;
    } else {
      this.checkMax(this.root, myNode);
    }
  }
  contains(value) {
    let temp = this.root;
    while (temp) {
      if (temp.value === value) {
        return true;
      }
      if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    return false;
  }
  checkMax(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.checkMax(root.left, node);
      }
    } else if (node.value > root.value) {
      if (root.right === null) {
        root.right = node;
      } else {
        this.checkMax(root.right, node);
      }
    }
  }

  sumOddNum() {
    let results = [];
    let oddNum = (node) => {
      if (node !== null && node.value % 2 !== 0) {
        results.push(node.value);
      }
      if (node.left) {
        oddNum(node.left);
      }
      if (node.right) {
        oddNum(node.right);
      }
    };
    oddNum(this.root);
    console.log(results);
    let sum =0;
    for (let i=0; i<results.length; i++){
      sum += results[i];
    }
    return sum;
  }
}
module.exports = BinarySearchTree;