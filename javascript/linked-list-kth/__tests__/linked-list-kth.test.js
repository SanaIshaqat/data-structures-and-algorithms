'use strict';
const LinkedList = require('../linked-list-kth');

describe('Linked List', () => {

it ('"k is invalid" when k is greater than the length of the linked list' ,()=> {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);


    let k = 10;

    expect(list.kthFromEnd(k)).toEqual('k is invalid');
  });

  it ('"k is invalid" when  k and the length of the list are the same' ,()=> {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
 

    let k = 4;

    expect(list.kthFromEnd(k)).toEqual('k is invalid');
  });

  it ('"k is invalid" when k is not a positive integer' ,()=> {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);


    let k = -1;

    expect(list.kthFromEnd(k)).toEqual('k is invalid');
  });

  it ('return the value when the linked list is of a size 1' ,()=> {
    let list = new LinkedList();
    list.insert(5);
    let k = 0;

    expect(list.kthFromEnd(k)).toBe(5);
  });

  it ('return the value that matches k from middle of linked list (HAPPY PATH)' ,()=> {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.insert(6);

    console.log (list.toString());
    let k = 2;

    expect(list.kthFromEnd(k)).toBe(3);
  });
  it ('"Empty list." messege when linked list is empty' ,()=> {
    let list = new LinkedList();

    console.log (list.toString());

    let k = 2;

    expect(list.kthFromEnd(k)).toBe('The list is Empty');
  });
});