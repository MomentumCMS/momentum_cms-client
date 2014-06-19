/* globals sinon */

import { test, moduleFor } from 'ember-qunit';
import mockHttp from '../../helpers/mock-http';
import mockModel from '../../helpers/mock-model';
import Authentication from '../../../services/authentication';

moduleFor('route:authenticated', 'Unit - AuthenticatedRoute', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('redirects unauthenticated users', function() {
  expect(1);
  var route = this.subject();
  route.transitionTo = sinon.spy();
  var authentication = Authentication.create();
  authentication.clear();
  route.set('authentication', authentication);
  route._redirect();
  ok(route.transitionTo.called, 'transitionTo was called');
});

test('does not redirect logged in users', function() {
  expect(1);
  var route = this.subject();
  route.transitionTo = sinon.spy();
  var authentication = Authentication.create();
  authentication.clear();
  authentication.set('loggedIn', true);
  route.set('authentication', authentication);
  route._redirect();
  ok(!route.transitionTo.called, 'transitionTo was not called');
});

test('it destroys unsaved model instances on transition if present', function() {
  var route = this.subject();
  mockModel.set('isDirty', true);
  route.set('currentModel', mockModel);
  route._cleanup(mockModel);
  ok(mockModel.transitionTo.calledWith('uncommitted'), 'The model was rolled back');
  ok(mockModel.deleteRecord.called, 'The model was deleted');
});