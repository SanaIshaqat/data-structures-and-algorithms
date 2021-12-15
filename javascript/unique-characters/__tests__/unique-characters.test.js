"use strict";
const Hashmap = require("../unique-characters");


describe("unique-characters-test", () => {
  
  it("1.successfuly checks if all characters in the string are unique or not", () => {
    let hashTable = new Hashmap(5000);

    let string = "The quick brown fox jumps over the lazy dog";
    expect(hashTable.uniqueCharacters(string)).toEqual(false);
  });

  it("2.successfuly checks if all characters in the string are unique or not", () => {
    let hashTable = new Hashmap(5000);

    let string = "I love cats";
    expect(hashTable.uniqueCharacters(string)).toEqual(true);
  });

  it("3.successfuly checks if all characters in the string are unique or not", () => {
    let hashTable = new Hashmap(5000);

    let string = "Donald the duck	";
    expect(hashTable.uniqueCharacters(string)).toEqual(false);
  });
});