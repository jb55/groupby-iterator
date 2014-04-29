'use strict';

module.exports = groupByIterator; 

function groupByIterator(xs, fn){
  let result = {};
  let i = 0;
  for (let x of xs) {
    let key = fn(x, i, xs);
    key in result? result[key].push(x) : result[key] = [x];
    i++;
  }
  return result;
}
