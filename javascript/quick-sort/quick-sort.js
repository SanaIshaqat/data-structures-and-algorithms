'use strict';

function _quickSort(arr, left = 0, right = arr.length-1){
  let positionIndex;

  if(arr.length > 1){
    positionIndex = partition(arr, left, right);

    if(left < positionIndex-1){
      _quickSort(arr, left, positionIndex-1);
    }

    if(positionIndex < right){
      _quickSort(arr, positionIndex, right);
    }
  }
  return arr;
}
function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left)/2)];
  let i = left;
  let z = right;
  while(i <= z){

    while(arr[i] < pivot){
      i++;
    }
    while(arr[z] > pivot){
      z--;
    }
    if(i <= z){
      swap(arr, i, z);
      i++;
      z--;
    }
  }
  return i;
}
function swap(arr, i, z){
  let temp = arr[i];
  arr[i] = arr[z];
  arr[z] = temp;
}

module.exports = _quickSort;