'use strict';

let expect = require('expect.js')
let groupby = require('./');
let range = require('range-generator')

function classifier(x) {
  return x % 2 === 0? 'even' : 'odd';
}

describe('iterator-groupby', function(){
  it('works', function(){
    let n = 50;
    let xs = range(n);
    let grouped = groupby(xs, classifier);

    expect(grouped.even.length).to.be(n / 2);
    expect(grouped.odd.length).to.be(n / 2);
  });

  it('empty works', function() {
    let n = 0;
    let xs = range(n);
    let grouped = groupby(xs, classifier);

    expect(Object.keys(grouped).length).to.be(0);
  });
});
