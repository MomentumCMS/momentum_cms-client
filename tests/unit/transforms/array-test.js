import { test, moduleFor } from 'ember-qunit';

moduleFor('transform:array', 'Unit - TransformArray', {
  setup: function() {},
  teardown: function() {}
});

test('it deserializes an array properly', function() {
  var transform = this.subject();
  var results = transform.deserialize(['one', 'two', 'three']);
  equal('one', results[0], 'Array returned the expected value');
  equal('two', results[1], 'Array returned the expected value');
  equal('three', results[2], 'Array returned the expected value');
});

test('it deserializes a string into an empty array', function() {
  var transform = this.subject();
  var results = transform.deserialize('hi ;-)');
  ok((typeof results === 'object'), 'An empty array was returned');
});

test('it serializes an array as an array', function() {
  var transform = this.subject();
  var results = transform.serialize(['one', 'two']);
  equal('one', results[0], 'Array returned the expected value');
  equal('two', results[1], 'Array returned the expected value');
});

test('it serializes comma seperated strings into an array', function() {
  var transform = this.subject();
  var results = transform.serialize('one,two,  three  ');
  equal('one', results[0], 'Array returned the expected value');
  equal('two', results[1], 'Array returned the expected value');
  equal('three', results[2], 'Array returned the expected value');
});

test('it serializes everything else into an empty array', function() {
  var transform = this.subject();
  ok(typeof transform.serialize(false) === 'object', 'An empty array is returned');
  ok(typeof transform.serialize(null) === 'object', 'An empty array is returned');
  ok(typeof transform.serialize(1) === 'object', 'An empty array is returned');
});