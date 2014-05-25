/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockHttp from '../../helpers/mock-http';
import Authentication from '../../../services/authentication';

moduleFor('route:index', 'Unit - IndexRoute', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('redirects authenticated users to their dashboard', function() {
  expect(1);
  var route = this.subject();
  route.transitionTo = sinon.spy();
  var authentication = Authentication.create();
  authentication.set('loggedIn', true);
  route.set('authentication', authentication);
  route._redirect();
  ok(route.transitionTo.calledWith('admin.dashboard'), 'transitionTo was called');
});
