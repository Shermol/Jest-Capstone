const sum = require('./sum');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

test('adds 1 + 2 to equal 3', () => {
     expect(sum(1, 2)).toBe(3);
});

test('subtract 5 - 3 to equal 2', () => {
    expect(subtract(5,3)).toBe(2);
});

test('divide 4 / 2 to be equal 2', () =>{
    expect(divide(4,2)).toBe(2);
})

test('multiply 4 * 2 to be equal 8', () =>{
    expect(multiply(4,2)).toBe(8);
})