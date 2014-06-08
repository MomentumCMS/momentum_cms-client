/* globals sinon */
import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:admin/site', 'Unit - AdminController', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('it contains the locale query params', function() {
  var controller = this.subject();
  equal(controller.get('queryParams')[0], 'locale', 'The controller has the correct query params defined');
});