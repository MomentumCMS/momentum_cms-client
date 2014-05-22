/* globals sinon */

import { test, moduleFor } from 'ember-qunit';
import mockHttp from '../../helpers/mock-http';
import Authentication from '../../../services/authentication';

moduleFor('route:application', 'Unit - ApplicationRoute', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('it logs out users', function() {
  expect(1);
  var route = this.subject();
  route.set('authentication', Authentication.create());
  route.transitionTo = sinon.spy();
  return route._logout().then(function() {
    ok(route.transitionTo.called, 'transitionTo was called');
  });
});