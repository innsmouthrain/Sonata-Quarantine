const test = require('tape');
const calculateChange = require('../src/change-calculator.js');

test('should return empty for empty input', function (t) {
    t.deepEqual([], calculateChange());
    t.end();
});

test('calculateChange(215, 300) should return [50, 20, 10, 5]', function(t) {
    const result = calculateChange(215, 300);
    const expected = [50, 20, 10, 5];
    t.deepEqual(result, expected);
    t.end();
});

test('calculateChange(486, 600) should return [100, 10, 2, 2]', function(t) {
    const result = calculateChange(486, 600);
    const expected = [100, 10, 2, 2];
    t.deepEqual(result, expected);
    t.end();
});

test('calculateChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function(t) {
    const result = calculateChange(12, 400);
    const expected = [200, 100, 50, 20, 10, 5, 2, 1];
    t.deepEqual(result, expected);
    t.end();
});

test('calculateChange(1487, 10000) should return [5000, 2000, 1000, 500, 10, 2, 1]', function(t) {
    const result = calculateChange(1487, 10000);
    const expected = [5000, 2000, 1000, 500, 10, 2, 1 ];
    t.deepEqual(result, expected);
    t.end();
});
