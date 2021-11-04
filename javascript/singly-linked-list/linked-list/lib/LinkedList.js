"use strict";

const Node = require("../lib/Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  
  includes(value) {
    let res = false;
    let newNode = this.head;
    while (newNode) {
      if (newNode.value == value) {
        return (res = true);
      }
      newNode = newNode.next;
    }
    return res;
  }

  toString() {
    let str = "";
    let newNode = this.head;
    while (newNode) {
      str += `{ ${newNode.value} } -> `;
      newNode = newNode.next;
    }
    str += `NULL`;
    return str;
  }
}

module.exports = LinkedList;