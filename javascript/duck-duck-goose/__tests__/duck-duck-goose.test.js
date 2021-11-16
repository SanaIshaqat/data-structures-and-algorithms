'use strict';

const duckDuckGoose = require("../duck-duck-goose");

describe ('DuckDuckGoose Game Test', () => {
  it ('if the input is an empty list', () => {
    expect(duckDuckGoose([],4)).toEqual ('List Has No Values');
  });
  it ('return the last person string in the list correct', () => {

    expect(duckDuckGoose(['A','B','C','D','E','F'],3)).toEqual ('The last Value is : A ');
  });

});