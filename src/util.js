function main(a, b) {
    return a + b;
}

module.exports = {
    add: (...args) => {
        return args.reduce((a, b) => (a + b), 0)
    },
    mul: (...args) => {
        return args.reduce((a, b) => (a * b), 1)
    },
    testFn: (a, b) => {
        if (a > b) {
            return a - b;
        } else {
            return main(a, b);
        }
    }
};