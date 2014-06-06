/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import Authentication from '../../../../services/authentication';

moduleFor('route:admin/site', 'Unit - AdminSiteRoute', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('the model returns pages, templates, and the site', function() {
  var route = this.subject();
  var calls = [];
  var calledParams = [];
  route.store = {
    find: function(name, params) {
      calls.push(name);
      calledParams.push(params);
      return new Ember.RSVP.Promise(function(resolve) {
        resolve(name);
      });
    }
  };
  route.model({site_id: 1});
  ok(calls.indexOf('template') !== -1, 'Template was called');
  ok(calls.indexOf('page') !== -1, 'Page was called');
  ok(calls.indexOf('site') !== -1, 'Site was called');
  equal(calledParams[0].site_id, 1, 'The proper site param was called');
});
