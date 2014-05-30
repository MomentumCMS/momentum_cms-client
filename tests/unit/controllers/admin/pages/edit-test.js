/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import Authentication from '../../../../../services/authentication';

moduleFor('controller:admin/pages/edit', 'Unit - AdminPagesEditController', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('the submitValue is set correctly', function() {
  var controller = this.subject();
  equal(controller.get('submitValue'), 'Update Page', 'the submitValue is set correctly');
  controller.set('isLoading', true);
  equal(controller.get('submitValue'), 'Saving...', 'the loading submitValue is set correctly');  
});