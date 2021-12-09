

"use strict";

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
class LinkedList {
    constructor() {
      this.head = null;
    }

add(value) {
    const node = new Node(value);
    if (!this.head) {
        this.head = node;
        return;
    } 
    let current = this.head;
    while (current.next) {
        current = current.next;
    }
    current.next = node;
}}

class HashMap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc, char)=> {
        return acc + char.charCodeAt(0);
    }, 0) * 599 % this.size;

}

  add(key, value) {

    const hash = this.hash(key);
    if (!this.storage[hash]) {
      
      const ll = new LinkedList();
      ll.add({ [key]: value });
      
      this.storage[hash] = ll;
      
    } else {
 this.storage[hash].add({ [key]: value });
    }
  }
  get(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      let currentNode = this.storage[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return currentNode.value[key];
        ;
        }
        currentNode = currentNode.next;
      }
    } else {
      return null;
    }
  }

  contains(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      let currentNode = this.storage[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        currentNode = currentNode.next;
      }
    } else {
      return false;
    }
  }
}


const myHash = new HashMap(1024);

myHash.add('mishmish', 'getHash');
myHash.add('boogie', 'boogie');
myHash.add('🍕', '🍕');
myHash.add('nimnim', 'nimnim');
myHash.add('namlah', 'namlah');
myHash.add('🦝', '🦝');

module.exports = HashMap;

