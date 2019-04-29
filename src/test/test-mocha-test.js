const { expect, should, assert } = require('chai');
const { add, mul, testFn } = require('../util');
should();
describe('unit test 模块', () => {
    describe('add方法测断言', () => {
        it('5 = 6 = 7 应该等于18', () => {
            assert.equal(add(5, 6, 7), 18)
        })
    });
    describe('mul方法的断言', () => {
        it('5 * 6 * 7 * 8 应该等于1680', () => {
            mul(5, 6, 7, 8).should.equal(1680)
        })
    });
    describe('testFn方法分之的断言', () => {
        it('传入，5， 4  应该进入第一个分支', () => {
            expect(testFn(5, 4)).equal(1);
        });
        it('传入，4， 5  应该进入第二个分支', () => {
            expect(testFn(4, 5)).equal(9);
        });
    })
});