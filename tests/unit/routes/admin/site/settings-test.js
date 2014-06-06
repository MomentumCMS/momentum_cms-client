/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockModel from '../../../../helpers/mock-model';

moduleFor('route:admin/site/settings', 'Unit - AdminSiteSettingsRoute', {
  needs: ['model:site'],
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('it returns the site model from admin.site', function() {
  var route = this.subject();
  route.modelFor = sinon.spy(function() {
    return {site: {}};
  });
  route.model();
  ok(route.modelFor.calledWith('admin.site'), 'The correct model was called');
});