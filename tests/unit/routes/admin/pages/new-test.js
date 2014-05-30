/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockModel from '../../../../helpers/mock-model';
import Authentication from '../../../../../services/authentication';

moduleFor('route:admin/pages/new', 'Unit - AdminPagesNewRoute', {
  needs: ['model:page', 'model:site', 'model:template'],
  setup: function() {},
  teardown: function() {}
}, function(container, context) {
  var mockStore = new DS.Store();
  container.register('store:main', DS.Store, {singleton: true});
});

test('it exists', function() {
  ok(this.subject());
});

test('it returns a new page model instance', function() {
  expect(2);
  var route = this.subject();
  route.store = this.container.lookup('store:main');
  Ember.run(function() {
    var model = route.model();
    ok(model.get('isNew'), 'It returned a new record');
    equal(model.get('identifier'), undefined, 'The identifier was undefined');
  });
});