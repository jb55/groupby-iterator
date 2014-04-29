'use strict';

let expect = require('expect.js')
let groupby = require('./');
let range = require('range-generator')

function classifier(x) {
  return x % 2 === 0? 'even' : 'odd';
}

describe('iterator-groupby', function(){
  it('works', function(){
    let n = 10;
    let xs = range(n);
    let grouped = groupby(xs, classifier);

    expect(grouped.even).to.eql([0,2,4,6,8])
    expect(grouped.odd).to.eql([1,3,5,7,9])
  });

  it('empty works', function() {
    let n = 0;
    let xs = range(n);
    let grouped = groupby(xs, classifier);

    expect(Object.keys(grouped).length).to.be(0);
  });
});
