"use strict";
const Hashmap = require("../hashmap");
const leftJoin =require('../hashmap-left-join')

describe("left-join-test", () => {
  let hashTableLeft;
  let hashTableRight;
  beforeAll(() => {
    hashTableLeft = new Hashmap(5000);
    hashTableLeft.add("fond", "enamored");
    hashTableLeft.add("warth", "anger");
    hashTableLeft.add("diligent", "employed");
    hashTableLeft.add("outfit", "garb");
    hashTableLeft.add("guide", "usher");

    hashTableRight = new Hashmap(5000);
    hashTableRight.add("fond", "averse");
    hashTableRight.add("warth", "delight");
    hashTableRight.add("diligent", "idle");
    hashTableRight.add("guide", "follow");
    hashTableRight.add("flow", "jam");
  });

  it("Successfuly returns the left-join between two different hashmaps", () => {
    let expectedResults = [
      ["warth", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", "null"],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "follow"],
    ];
    let hashTable = new Hashmap(5000);

    expect(leftJoin(hashTableLeft, hashTableRight)).toEqual(
      expectedResults
    );
  });
});