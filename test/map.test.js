import test from 'tape';
// const test = require('tape').test;
// const Map = require('../src/components/map').Map;
import { Room, Map } from '../src/components/map';

// const map = require('../src/components/map.js')

const map = new Map();

test('Should be empty at initialization', function (t) {
  t.deepEqual(map,  { coords: [[[undefined]]] } );
  t.end();
});

// test('Should have rooms at init coords when using template init',
//   function(t) {
//     t.deepEqual(map(
//
