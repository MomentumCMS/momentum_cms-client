/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import Authentication from '../../../services/authentication';

moduleFor('route:admin', 'Unit - AdminRoute', {
  setup: function() {
    var route = this.subject();
    route.store = {
      find: sinon.spy()
    };
  },
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('it loads sites', function() {
  var route = this.subject();
  route.model();
  ok(route.store.find.calledWith('site'), 'The correct transition was called');
});

test('it redirects users to the new site path if no sites exist', function() {
  var route = this.subject();
  route.transitionTo = sinon.spy();
  route.store.all = function() { return Ember.A([]); };
  route.afterModel();
  ok(route.transitionTo.calledWith('admin.sites.new'), 'The user was transition to the new site path');
});

test('it does not redirect users if there are sites present', function() {
  var route = this.subject();
  route.transitionTo = sinon.spy();
  route.store.all = function() { return Ember.A(['site']); };
  route.afterModel();
  ok(!route.transitionTo.called, 'The user was not redirected to the new site path');
});