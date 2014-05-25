/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockHttp from '../../../helpers/mock-http';
import Authentication from '../../../../services/authentication';

moduleFor('route:admin/account', 'Unit - AdminAccountRoute', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});
