'use strict';

function selectionSort(array){

    if(array.length === 0){
        return `The Array Is Empty!`;
      }
    
  for(let i = 1; i < array.length; i++){
    let z = i - 1;
    let temporaryVal = array[i];

    while((z >= 0) && (temporaryVal < array[z])){
      array[z + 1] = array[z];
      z--;
    }
    array[z + 1] = temporaryVal;
  }
  return array;
}

module.exports = selectionSort;