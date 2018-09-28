const test = require('tape');
// const jsdom = require('jsdom');
const fs = require('fs');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync(__dirname + '/../index.html', 'utf8');

const dom = new JSDOM(html);
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector('p').textContent); // "Hello world"

global.document = dom.window.document;

const frontEndCode = require('../script.js');

test('test increment function', function(t) {
    let actual = frontEndCode.increment(1);
    let expected = 2;
    t.equal(actual, expected, 'should add one to a number');
    frontEndCode.increment('not a number');
    actual = document.querySelector('.error').textContent;
    expected = 'Error: Argument passed to increment was not a number';
    t.equal(actual, expected, 'should update error node when a string passed in');
    t.end();
});

test('test decrement function', function(t) {
    let actual = frontEndCode.decrement(2);
    let expected = 1;
    t.equal(actual, expected, 'should remove one to a number');
    frontEndCode.decrement('not a number');
    actual = document.querySelector('.error').textContent;
    expected = 'Error: Argument passed to decrement was not a number';
    t.equal(actual, expected, 'should update error node when a string passed in');
    t.end();
});

test('test reset function', function(t) {
    let actual = frontEndCode.resetFunc();
    let expected = 0;
    t.equal(actual, expected, 'should remove one to a number');
    t.end();
});

test('test updateDom function', function(t) {
    frontEndCode.updateDom('ilusmd', document.querySelector('.error'));
    let actual = document.querySelector('.error').textContent;
    let expected = 'ilusmd';
    t.equal(actual, expected, 'should update error node with new text');

    frontEndCode.updateDom('ilusmd', document.querySelector('.count'));
    actual = document.querySelector('.count').textContent;
    expected = 'ilusmd';
    t.equal(actual, expected, 'should update count node with new text');

    frontEndCode.updateDom('ilusmd', document.querySelector('.reset'));
    actual = document.querySelector('.reset').textContent;
    expected = 'ilusmd';
    t.equal(actual, expected, 'should update reset node with new text');

    frontEndCode.updateDom('ilusmd', document.querySelector('.dec'));
    actual = document.querySelector('.dec').textContent;
    expected = 'ilusmd';
    t.equal(actual, expected, 'should update dec node with new text');

    frontEndCode.updateDom('ilusmd', document.querySelector('.inc'));
    actual = document.querySelector('.inc').textContent;
    expected = 'ilusmd';
    t.equal(actual, expected, 'should update inc node with new text');
    t.end();
});

test('increment is called properly when the inc button is clicked', function(t) {
    let count = document.querySelector('.count');
    frontEndCode.updateDom(frontEndCode.resetFunc(), count);
    document.querySelector('.inc').click();
    let actual = count.textContent;
    let expected = '1';
    t.equal(
        actual,
        expected,
        'clicking the \'+\' button in the DOM should increment the count by 1');
    t.end();
});

test('decrement is called properly when the dec button is clicked', function(t) {
    let count = document.querySelector('.count');
    frontEndCode.updateDom(frontEndCode.resetFunc(), count);
    document.querySelector('.dec').click();
    let actual = count.textContent;
    let expected = '-1';
    t.equal(
        actual,
        expected,
        'clicking the \'-\' button in the DOM should decrement the count by 1');
    t.end();
});

test('reset is called properly when the reset button is clicked', function(t) {
    let count = document.querySelector('.count');
    frontEndCode.updateDom(frontEndCode.resetFunc(), count);
    document.querySelector('.reset').click();
    let actual = count.textContent;
    let expected = '0';
    t.equal(
        actual,
        expected,
        'clicking the reset button in the DOM should reset to 0');
    t.end();
});
