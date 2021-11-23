'use strict';

const BinarySearchTree = require('../sum-odd-num');

let myBinarySearchTree;

beforeEach(() => {
  myBinarySearchTree = new BinarySearchTree();
});
describe('Binary Search Tree Working', () => {
  it('successfully instantiate an empty tree', () => {
    expect(myBinarySearchTree.root).toBeNull();
  });
  it('successfully instantiate a tree with a single root node', () => {
    myBinarySearchTree.adds(20);
    expect(myBinarySearchTree.root.value).toEqual(20);
    expect(myBinarySearchTree.left).toBeFalsy();
    expect(myBinarySearchTree.right).toBeFalsy();
  });
  it('successfully add a left child and right child to a single root node', () => {
    myBinarySearchTree.adds(20);
    myBinarySearchTree.adds(7);
    myBinarySearchTree.adds(25);
    expect(myBinarySearchTree.root.value).toEqual(20);
    expect(myBinarySearchTree.root.left.value).toEqual(7);
    expect(myBinarySearchTree.root.right.value).toEqual(25);
  });
  it('successfully add a left child and right child to a single root node', () => {
    myBinarySearchTree.adds(20);
    myBinarySearchTree.adds(7);
    myBinarySearchTree.adds(25);
    expect(myBinarySearchTree.contains(7)).toBe(true);
    expect(myBinarySearchTree.contains(3)).toBe(false);
  });
 
  it('successfully return the sum of odd numbers', () => {
    myBinarySearchTree.adds(20);
    myBinarySearchTree.adds(7);
    myBinarySearchTree.adds(25);
    myBinarySearchTree.adds(3);
    expect(myBinarySearchTree.sumOddNum()).toBe(35);
  });

});