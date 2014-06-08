/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import Authentication from '../../../../services/authentication';

moduleFor('route:admin/pages', 'Unit - AdminPagesRoute', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('the model returns the admin.site model', function() {
  var route = this.subject();
  route.modelFor = sinon.spy();
  route.model();
  ok(route.modelFor.calledWith('admin.site'));
});
