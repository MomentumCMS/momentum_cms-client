/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockHttp from '../../../../helpers/mock-http';
import Authentication from '../../../../../services/authentication';

moduleFor('route:admin/sites/new', 'Unit - AdminSitesNewRoute', {
  needs: ['model:site'],
  setup: function() {
    // var container = new Ember.Container();
    // container
    // var mockStore = DS.Store();
    // mockStore.container = new Ember.Container();

    // var container = new Ember.Container();
    // container.register('model:site', )
    // this.subject().store = new DS.Store();
    // this.subject().store.container = new Ember.Container();
  },
  teardown: function() {}
}, function(container, context) {
  var mockStore = new DS.Store();
  container.register('store:main', DS.Store, {singleton: true});
  // // container.injection('')
  // // debugger;
  // mockStore.container = container;
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
