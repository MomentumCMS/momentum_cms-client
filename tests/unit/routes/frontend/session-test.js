/* global sinon*/

import { test, moduleFor } from 'ember-qunit';
import mockHttp from '../../../helpers/mock-http';
import Authentication from '../../../../services/authentication';
import createSuccessResponse from '../../../mocks/sessions/create-success';

moduleFor('route:frontend/session', 'Unit - SessionRoute', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('create', function() {
  expect(3);

  mockHttp('*/sessions', createSuccessResponse, 200);
  var route = this.subject();
  route.set('authentication', Authentication.create());
  route.set('controller', {
    credentials: function() {
      return {email: 'john.smith@test.com', password: 'passpass', rememberMe: true};
    }
  });
  route.transitionTo = sinon.spy();
  var request = route._authenticate();
  ok(route.get('controller.isLoading'));
  request.then(function() {
    equal(false, route.get('controller.isLoading'), 'isLoading was reset after the request');
    ok(route.transitionTo.calledWith('admin.dashboard'));
  });
  return request;
});
