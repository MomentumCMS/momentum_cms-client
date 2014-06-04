/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockHttp from '../../../helpers/mock-http';
import Authentication from '../../../../services/authentication';

moduleFor('route:admin/pages', 'Unit - AdminPagesRoute', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('the afterModel sets the currentSite property on the admin route', function() {
  var route = this.subject();
  route.set('currentSite', Ember.Object.create());
  var mockModel = {
    site: 'worked'
  };
  route.afterModel(mockModel);
  equal(route.get('currentSite.site'), 'worked', 'The currentSite was set correctly');
});

// TODO: Get this working... Ember is complaining about dynamic paths
// test('it loads pages for the current site', function() {
//   var route = this.subject();
//   return route.model({site_id: 1}).then(function() {
//   });
// });