"use strict";

const LinkedList = require('../lib/LinkedList');

describe("Linked List", () => {
  it("Can successfully instantiate an empty linked list", () => {
    const ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll.head).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
    const ll = new LinkedList();
    ll.insert("test01");
    expect(ll.head.value).toBe("test01");
    expect(ll.head.next).toBeNull();

   
  });

  it("The head property will properly point to the first node in the linked list", () => {
    const ll = new LinkedList();
    ll.insert("test01");
    ll.insert("test02");
    ll.insert("test03");

    expect(ll.head.value).toBe("test03");
    expect(ll.head.next).toBeTruthy();
  });
  it("Can properly insert multiple nodes into the head of a linked list ", () => {
    const ll = new LinkedList();
    ll.insert("test01");
    ll.insert("test02");
    ll.insert("test03");

    expect(ll.head.value).toBe("test03");
    expect(ll.head.next.value).toBe("test02");
    expect(ll.head.next.next.value).toBe("test01");
    expect(ll.head.next.next.next).toBeNull();
  });
  it("Will return true when finding a value within the linked list that exists", () => {
    const ll = new LinkedList();
    ll.insert("test01");
    ll.insert("test02");
    expect(ll.includes("test02")).toBe(true);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    const ll = new LinkedList();
    ll.insert("test01");
    ll.insert("test02");
    expect(ll.includes("test03")).toBe(false);
  });

  it("Can properly return a collection of all the values that exist in the linked list", () => {
    const ll = new LinkedList();
    ll.insert("test03");
    ll.insert("test02");
    ll.insert("test01");

    expect(ll.toString()).toBe("{ test01 } -> { test02 } -> { test03 } -> NULL");
  });

  
});