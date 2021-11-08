'use strict';

let Node = require('./node');


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length=0;
  }
  //methods

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  insert(value) {
    try {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
      }
      else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
      }
    } catch (error) {
      console.log(error);

    }

  }

  includes(value){
    if(this.head){
      let testNode = this.head;
      while (testNode.next){
        if(testNode.value === value) return true;
        testNode=testNode.next;
      }

      if(testNode.value === value) return true;
    } return false;
  }

  toString() {
    let list;
    if (this.head){
      list = `(head)-->`;
      let testNode = this.head;
      while (testNode){
        list = list + `[${testNode.value}]-->`;
        testNode=testNode.next;
      }
      list = list + ` Null`;
    } else { list = `(head)--> NULL`; }

    return list;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.head){
      let pointer = this.head;
      while(pointer.next){ 
        pointer=pointer.next;
      }
      pointer.next=newNode;
      this.tail = newNode;
      this.length++;

    } else { this.head = newNode;
      this.tail = newNode;
      this.length++;

    }
  }

  insertBefore(value,newValue){
    let newNode = new Node(newValue);
    if(this.head){
      let pointer = this.head;
      if (pointer.value ===value){
        newNode.next = pointer;
        this.head = newNode;
        this.length++;

        return;
      }
      while(pointer){
        if (pointer.next.value===value){
          newNode.next = pointer.next;
          pointer.next = newNode;
          this.length++;

          break;
        }
        pointer=pointer.next;
      }
    } else { this.head = newNode; 
      this.tail = newNode;
      this.length++;
    }
  }

  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    if(this.head){

      let pointer = this.head;
      while(pointer){
        if (pointer.value===value){
          newNode.next = pointer.next;
          pointer.next = newNode;
          this.tail = newNode;
          this.length++;
          break;
        }
        pointer=pointer.next;}
    } else { this.head = newNode; 
      this.tail = newNode;
      this.length++;
    }
  }


  kthFromEnd(k){
    if (this.head){
      if (k < this.length && k >=0 ){
        let counter = this.length-1;

        let pointer = this.head;
        while(counter!== k){
          pointer=pointer.next;
          counter--;
        }
        return pointer.value;

      } else { return 'k is invalid'; }
    } else { return 'The list is Empty';}
  }

}


module.exports = LinkedList;

