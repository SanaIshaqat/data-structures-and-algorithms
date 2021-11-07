"use strict";

let LinkedList = require("../linked-list-insertions");

describe("linked-list insertion ", () => {
  it("Can successfully add a node to the end of the linked list", () => {
    let updatedList = new LinkedList();
    updatedList.append("value1");
    expect(updatedList.head.value).toEqual("value1");
    expect(updatedList.head.next).toBeNull();
  });

  it("Can successfully add multiple nodes to the end of a linked list", () => {
    let updatedList = new LinkedList();
    updatedList.append("value1");
    updatedList.append("value2");
    updatedList.append("value3");
    expect(updatedList.head.value).toEqual("value1");
    expect(updatedList.head.next.value).toEqual("value2");
    expect(updatedList.head.next.next.value).toEqual("value3");
    expect(updatedList.head.next.next.next).toBeNull();
  });

  it("Can successfully insert a node before a node located in the middle of a linked list", () => {
    let updatedList = new LinkedList();
    updatedList.insert("value3");
    updatedList.insert("value2");
    updatedList.insert("value1");
    updatedList.insertBefore("value2", "value4");
    expect(updatedList.head.value).toEqual("value1");
    expect(updatedList.head.next.value).toEqual("value4");
    expect(updatedList.head.next.next.value).toEqual("value2");
    expect(updatedList.head.next.next.next.value).toEqual("value3");
    expect(updatedList.head.next.next.next.next).toBeNull();
  });

  it("Can successfully insert a node before the first node of a linked list ", () => {
    let updatedList = new LinkedList();
    updatedList.insert("value2");
    updatedList.insert("value1");
    updatedList.insertBefore("value1", "value3");
    expect(updatedList.head.value).toEqual("value3");
    expect(updatedList.head.next.value).toEqual("value1");
    expect(updatedList.head.next.next.value).toEqual("value2");
    expect(updatedList.head.next.next.next).toBeNull();
  });

  it("Can successfully insert after a node in the middle of the linked list", () => {
    let updatedList = new LinkedList();
    updatedList.insert("value3");
    updatedList.insert("value2");
    updatedList.insert("value1");
    updatedList.insertAfter("value2", "value4");
    expect(updatedList.head.value).toEqual("value1");
    expect(updatedList.head.next.value).toEqual("value2");
    expect(updatedList.head.next.next.value).toEqual("value4");
    expect(updatedList.head.next.next.next.value).toEqual("value3");
    expect(updatedList.head.next.next.next.next).toBeNull();
  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    let updatedList = new LinkedList();
    updatedList.insert("value2");
    updatedList.insert("value1");
    updatedList.insertAfter("value2", "value3");
    expect(updatedList.head.value).toEqual("value1");
    expect(updatedList.head.next.value).toEqual("value2");
    expect(updatedList.head.next.next.value).toEqual("value3");
    expect(updatedList.head.next.next.next).toBeNull();
  });
});