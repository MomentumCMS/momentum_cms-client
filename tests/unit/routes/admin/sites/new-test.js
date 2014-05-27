/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockHttp from '../../../../helpers/mock-http';
import mockModel from '../../../../helpers/mock-model';
import Authentication from '../../../../../services/authentication';

moduleFor('route:admin/sites/new', 'Unit - AdminSitesNewRoute', {
  needs: ['model:site'],
  setup: function() {},
  teardown: function() {}
}, function(container, context) {
  var mockStore = new DS.Store();
  container.register('store:main', DS.Store, {singleton: true});
});

test('it exists', function() {
  ok(this.subject());
});

test('it returns a new site model instance', function() {
  expect(2);
  var route = this.subject();
  route.store = this.container.lookup('store:main');
  Ember.run(function() {
    var model = route.model();
    ok(model.get('isNew'), 'It returned a new record');
    equal(model.get('title'), undefined, 'The title was undefined');
  });
});

test('it saves the site and redirects the user to pages.index', function() {
  var route = this.subject();
  route.set('currentModel', mockModel);
  route.transitionTo = sinon.spy();
  return route._submit().then(function() {
    ok(route.transitionTo.calledWithExactly('pages.index', mockModel), 'transitionTo was called');
  });
});
