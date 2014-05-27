/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import Authentication from '../../../services/authentication';

moduleFor('controller:admin', 'Unit - AdminController', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});
