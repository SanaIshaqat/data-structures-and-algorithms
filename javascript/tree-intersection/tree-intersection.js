"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null;
      }
      append(value) {
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
    }
}


class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  
  // hash
  hash(key) {
    return key.split('').reduce((acc, char)=> {
        return acc + char.charCodeAt(0);
    }, 0) * 7 % this.size;
}

  // add
  add(key, value) {
    
    let hash;
    if (typeof key == "number") {
      hash = key;
    } else {
      hash = this.hash(key);
    }
    if (!this.map[hash]) {
        this.map[hash] = new LinkedList();
    }
    let entry = { [key] : value} 
    this.map[hash].append(entry);
}


  // get
  get(key){
    let hash=this.hash(key)
    if(!this.map[hash]) return null 
    let index=this.map[hash]
    let current=index.head
    if(!current) return 'does not exiset'
    if(current.value[key]) return current.value[key]
    while(current.next){
        current=current.next
        if(current.value[key]) return current.value[key]
    }
}

  // contains
  contain(key){
    let hash=this.hash(key)
    if(!this.map[hash]) return false 
    let index=this.map[hash]
    let current=index.head
    if(!current) return false
    if (current.value[key]) return true;

  while (current.next) {
    current = current.next;
    if (current.value[key]) return true;
  }

}
  // treeIntersection
  treeIntersection(firstTree, secondTree) {
    let key;
    let counter = 0;
    let hash;
    let results = [];
    let traverseTree = (node) => {
      key = node.value;
      this.add(key, "noValue");
      if (counter > 0) {
        typeof key == "number" ? (hash = key) : this.hash(key);
        if (this.map[hash].head.next) {
          results.push(hash);
        }
      }
      if (node.left) {
        traverseTree(node.left);
      }
      if (node.right) {
        traverseTree(node.right);
      }
    };
    traverseTree(firstTree.root);
    counter++;
    traverseTree(secondTree.root);

    return results;
  }
}




module.exports = {Hashmap,Node};