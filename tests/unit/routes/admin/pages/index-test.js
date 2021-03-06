/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockModel from '../../../../helpers/mock-model';
import Authentication from '../../../../../services/authentication';

moduleFor('route:admin/pages/index', 'Unit - AdminPagesIndexRoute', {
  setup: function() {},
  teardown: function() {}
}, function(container, context) {
  // var mockStore = new DS.Store();
  // container.register('store:main', DS.Store, {singleton: true});
});

test('it exists', function() {
  ok(this.subject());
});

test('it finds pages for the current site', function() {
  var route = this.subject();
  route.modelFor = function() {
    return {site: {id: 1}};
  };
  route.set('store', {
    find: sinon.spy()
  });
  route.model();
  ok(route.get('store').find.calledWithExactly('page', {site_id: 1}), 'It returns pages from the store');
});