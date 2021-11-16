'use strict';

const Queue = require ('./queue');

let newQueue = new Queue();

let dequeuedValues = '';

function duckDuckGoose (list , k){
  if (list.length !== 0){
    for (let x=0; x<list.length; x++){
      newQueue.enqueue (list[x]);
    }
  }else {
    return 'List Has No Values';
  }

  while (newQueue.size() !== 1 ){
    for (let y =0 ; y< k-1; y++){
      dequeuedValues = newQueue.dequeue();
      newQueue.enqueue(dequeuedValues.value);
    }
    newQueue.dequeue();
  }
  return `The last Value is : ${newQueue.dequeue().value} `;
}

module.exports = duckDuckGoose;