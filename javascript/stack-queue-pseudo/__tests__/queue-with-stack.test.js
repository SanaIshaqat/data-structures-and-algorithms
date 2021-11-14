"use strict";

const PseudoQueue = require("../queue-with-stack");

describe("seudo queue", () => {
  it("Can successfully add into a PseudoQueue ", () => {
    const pesudo = new PseudoQueue();
    expect(pesudo.enqueue(1)).toBe(1);
  });

  it("Can successfully add multiple values onto a PseudoQueue", () => {
    const pesudo = new PseudoQueue();
    pesudo.enqueue(4);
    pesudo.enqueue(3);
    pesudo.enqueue(2);
    pesudo.enqueue(1);

    expect(pesudo.stackPush.top.value).toBe(1);
    expect(pesudo.stackPush.top.next.value).toBe(2);
    expect(pesudo.stackPush.top.next.next.value).toBe(3);
    expect(pesudo.stackPush.top.next.next.next.value).toBe(4);
    expect(pesudo.stackPush.top.next.next.next.next).toBeNull();
  });

  it("Can successfully dequeue off the stack", () => {
    const pesudo = new PseudoQueue();
    pesudo.enqueue(1);
    expect(pesudo.dequeue()).toBe(1);
  });

  it("Can successfully dequeue a stack after multiple pops", () => {
    const pesudo = new PseudoQueue();
    pesudo.enqueue(4);
    pesudo.enqueue(3);
    pesudo.enqueue(2);
    pesudo.enqueue(1);
    expect(pesudo.dequeue()).toBe(4);
    expect(pesudo.dequeue()).toBe(3);
    expect(pesudo.dequeue()).toBe(2);
    expect(pesudo.dequeue()).toBe(1);
  });

  it("Can successfully dequeue a stack after multiple pops", () => {
    const pesudo = new PseudoQueue();
    pesudo.enqueue(4);
    pesudo.enqueue(3);
    pesudo.dequeue();
    pesudo.enqueue(2);
    pesudo.enqueue(1);
    expect(pesudo.dequeue()).toBe(3);
    expect(pesudo.dequeue()).toBe(2);
    expect(pesudo.dequeue()).toBe(1);
  });

  it("Calling dequeue on empty pesudo raises exception", () => {
    const pesudo = new PseudoQueue();
    expect(pesudo.dequeue()).toBe("stack is empty");
  });
});