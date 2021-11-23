'use strict';

const fizzBuzzTree = require('../tree-fizz-buzz').fizzBuzzTree;
const KaryTree = require('../tree-fizz-buzz').KaryTree;
const Node = require('../tree-fizz-buzz').Node;

describe('FizzBuzz Tree Test', () => {
  it ('return correct output', ()=>{
    let myKaryTree = new KaryTree();
    let root = myKaryTree.root = new Node (1,3);
    let first = root.children[0] = new Node (20,3);
    let second = root.children[1] = new Node (10,2);
    let third = root.children[2] = new Node (18,1);

    first.children[0] = new Node (3,0);
    first.children[1] = new Node (90,0);
    first.children[2] = new Node (24,0);

    second.children[0] = new Node (100,0);
    second.children[1] = new Node (27,0);

    third.children[0] = new Node (45,0);

    let result = [ '1','Buzz','Buzz', 'Fizz','Fizz', 'FizzBuzz','Fizz', 'Buzz','Fizz', 'FizzBuzz'];

    expect (fizzBuzzTree(myKaryTree).breadth()).toEqual(result);
  });
});