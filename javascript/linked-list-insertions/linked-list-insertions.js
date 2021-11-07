"use strict";

const Node = require("./node");

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
  
  append(value) {
    // create a new node
   const node = new Node(value);
   //if list is Empty add new node and make it head
   if (!this.head) {
     this.head = node;
   } else {

     let currentNode = this.head;
     while (currentNode.next) {
       currentNode = currentNode.next;
     }
     //add node 
     currentNode.next = node;
   }  
   this.length++;             
 }

 insertBefore(value, newValue) {
   // MOVE head value in the new Node
   let newNode = this.head;
   //create node for the new value to be added 
   const node = new Node(newValue);
   if (newNode.value === value) {
     node.next = this.head;
     this.head = node;
   } else {
     while (newNode.next) {
       if (newNode.next.value === value) {
         node.next = newNode.next;
         newNode.next = node;
         break;
       } else {
         newNode = newNode.next;
       }
     }
   }
 }

 insertAfter(value, newValue) {
   let newNode = this.head;
   const node = new Node(newValue);
   while (newNode) {
     if (newNode.value === value) {
       node.next = newNode.next;
       newNode.next = node;
       break;
     }
     newNode = newNode.next;
   }
 }
}

module.exports = LinkedList;

