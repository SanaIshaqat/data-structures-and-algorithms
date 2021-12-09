"use strict";
const HashMap = require("../hash-table");

describe("hash-table testing", () => {
  let hashTable;
  beforeAll(() => {
    hashTable = new HashMap(5000);
    hashTable.add("owner", "sana");
    hashTable.add("phone", "0000");
    hashTable.add("email", "sana@email.com");
  });

//   xit("1.Adding a key/value to your hashtable results in the value being in the data structure", () => {
//     const hash1 = hashTable.hash("owner");
//     const hash2 = hashTable.hash("phone");
//     const hash3 = hashTable.hash("email");
//     expect(hashTable.storphone[hash1].head.value).toEqual({ owner: "sana" });
//     expect(hashTable.storphone[hash2].head.value).toEqual({phone: "0000" });
//     expect(hashTable.storphone[hash3].head.value).toEqual({ email: "sana@email.com" });
//   });

  it("1.Retrieving based on a key returns the value stored", () => {
    expect(hashTable.get("owner")).toEqual("sana");
    expect(hashTable.get("phone")).toEqual("0000");
    expect(hashTable.get("email")).toEqual("sana@email.com");
  });

  it("2.Successfully returns null for a key that does not exist in the hashtable", () => {
    expect(hashTable.get("test1")).toBeNull();
    expect(hashTable.get("test2")).toBeNull();
  });

//   xit("4.Successfully handle a collision within the hashtable", () => {
//     hashTable.add("animal", "dog");
//     const hash3 = hashTable.hash("email");
//     expect(hashTable.storphone[hash3].head.value).toEqual({
//       email: "sana@email.com",
//     });
//     expect(hashTable.storphone[hash3].head.next.value).toEqual({
//       animal: "dog",
//     });
//   });


  it("3.Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    hashTable.add("animal", "dog");

    expect(hashTable.get("email")).toEqual("sana@email.com");
    expect(hashTable.get("animal")).toEqual("dog");
  });


//   xit("6.Successfully hash a key to an in-range value", () => {
//     const hashINRange = hashTable.hash("owner");

//     expect(hashINRange).toBeLessThan(hashTable.storphone.length);
//     expect(hashINRange).toBeLessThan(5000);
//   });

  it("4.Successfully test the hash if it contains a key or not", () => {
    expect(hashTable.contains("owner")).toBeTruthy();
    expect(hashTable.contains("test")).toBe(false);
  });
});