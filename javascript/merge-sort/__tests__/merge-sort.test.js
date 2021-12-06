'use strict';

const mergeSort = require('../merge-sort');

describe('merge sort', () => {

  it('Can successfully sort an arrayay', () => {
    let array = [8,4,23,42,16,15];
    let expected = [4,8,15,16,23,42];

    expect(mergeSort(array)).toEqual(expected);
  });

  it('Can successfully sort a reverse-sorted arrayay', () => {
    let array = [20,18,12,8,5,-2];
    let expected = [-2,5,8,12,18,20];

    expect(mergeSort(array)).toEqual(expected);
  });

  it('Can successfully sort an arrayay with few uniques', () => {
    let array = [5,12,7,5,5,7];
    let expected = [5,5,5,7,7,12];

    expect(mergeSort(array)).toEqual(expected);
  });

  it('Can successfully sort a nearly-sorted arrayay', () => {
    let array = [2,3,5,7,13,11];
    let expected = [2,3,5,7,11,13];

    expect(mergeSort(array)).toEqual(expected);
  });

});