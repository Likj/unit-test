const { should, expect, assert } = require('chai');

// const assert = require('assert');
const { add, mul } = require('../util');

// assert.equal(add(5, 6, 7), '18', '');
should();
// console.log(add(5, 6, 7))
add(5, 6, 7).should.equal(18, '应该是18的should');
// expect(add(5, 6, 7)).to.be.equal(18, "应该是18的expect");
// assert.equal(add(5, 6, 7), 18, '应该是18的assert');