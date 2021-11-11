"use strict";

const Queue = require("../queue/queue");

describe("queues", () => {
  it("Can successfully enqueue into a queue ", () => {
    const queue = new Queue();
    queue.enqueue("test1");
    expect(queue.front.value).toBe("test1");
    expect(queue.front.next).toBe(null);
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    const queue = new Queue();
    queue.enqueue("test1");
    queue.enqueue("test2");
    queue.enqueue("test3");

    expect(queue.front.value).toBe("test1");
    expect(queue.front.next.value).toBe("test2");
    expect(queue.front.next.next.value).toBe("test3");
    expect(queue.front.next.next.next).toBe(null);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new Queue();

    queue.enqueue("test1");
    queue.enqueue("test2");
    queue.enqueue("test3");

    expect(queue.dequeue()).toBe("test1");
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    const queue = new Queue();

    queue.enqueue("test1");
    queue.enqueue("test2");
    queue.enqueue("test3");

    expect(queue.peek()).toBe("test1");
  });

  it("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();

    expect(queue.front).toBe(null);
  });

});