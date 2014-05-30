/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockModel from '../../../../helpers/mock-model';
import Authentication from '../../../../../services/authentication';

moduleFor('route:admin/pages/index', 'Unit - AdminPagesIndexRoute', {
  setup: function() {},
  teardown: function() {}
}, function(container, context) {
  var mockStore = new DS.Store();
  container.register('store:main', DS.Store, {singleton: true});
});

test('it exists', function() {
  ok(this.subject());
});

test('it pulls the model from the admin.pages route', function() {
  var route = this.subject();
  route.modelFor = sinon.spy();
  route.model();
  ok(route.modelFor.calledWith('admin.pages'), 'The route requested the model for admin.pages');
});