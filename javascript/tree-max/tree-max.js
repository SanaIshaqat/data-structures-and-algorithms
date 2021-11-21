'use strict';

const Node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /**
   * Pre-Oder
   *  Read -> Left -> Right
   */

  PreOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      // read
      arrayOfReadNodes.push(node.value);
      // check left
      if (node.left) { _walk(node.left) }
      // check right
      if (node.right) { _walk(node.right) }
    }

    _walk(this.root);
    return arrayOfReadNodes;
  }

  /**
   * 
   * Post-Order: Left -> Right -> Read
   */
  PostOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      // check left
      if (node.left) { _walk(node.left) }
      // check right
      if (node.right) { _walk(node.right) }
      // read
      arrayOfReadNodes.push(node.value);
    }

    _walk(this.root);
    return arrayOfReadNodes;
  }

  /**
   * 
   * In Order: : left -> Read -> Right
   */
  InOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      // check left
      if (node.left) { _walk(node.left) }
      // read
      arrayOfReadNodes.push(node.value);
      // check right
      if (node.right) { _walk(node.right) }
    }

    _walk(this.root);
    return arrayOfReadNodes;
  }

  findMaxValue() {
    let maxNode;
    let _findMaxValue = (node) => {
      if (!maxNode) {
        maxNode = node.value;
      }
      if (node.value > maxNode) {
        maxNode = node.value;
      }
      if (node.left) {
        _findMaxValue(node.left);
      }
      if (node.right) {
        _findMaxValue(node.right);
      }
    };
    _findMaxValue(this.root);
    return maxNode;
  }

}

module.exports = BinaryTree;

// new BinaryTree(new Node(value))