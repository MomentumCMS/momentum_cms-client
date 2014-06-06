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

test('the default submitValue is correct', function() {
  var route = this.subject();
  equal('Save', route.get('submitValue'), 'The submitValue was set correctly');
});

test('it saves the model currentModel', function() {
  var route = this.subject();
  route.set('currentModel', mockModel);
  route.set('controller', Ember.Object.create());
  return route._update().then(function() {
    equal(route.get('controller.submitValue'), 'Save', 'The value was reset properly');
  });
});