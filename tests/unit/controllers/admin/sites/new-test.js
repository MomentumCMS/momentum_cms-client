/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import Authentication from 'momentum-client/services/authentication';

moduleFor('controller:admin/sites/new', 'Unit - AdminSitesNewController', {
  needs: ['controller:admin'],
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('it needs the admin controller', function() {
  equal(this.subject().needs[0], 'admin');
});