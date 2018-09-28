// import { Test } from 'tape';

const test = require('tape');

// var test = Test;

test('should return -1 when the value is not present in Array', function (t) {
    t.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so passes
    t.end();
});
