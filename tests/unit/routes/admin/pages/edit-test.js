/* globals sinon */
import { test, moduleFor } from 'ember-qunit';
import mockModel from '../../../../helpers/mock-model';
import Authentication from '../../../../../services/authentication';

moduleFor('route:admin/pages/edit', 'Unit - AdminPagesEditRoute', {
  setup: function() {},
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('it finds the page using passed in id', function() {
  var route = this.subject();
  var mockStore = Ember.Object.create({
    find: sinon.spy()
  });
  route.set('store', mockStore);
  route.model({page_id: 1});
  ok(route.get('store').find.calledWithExactly("page", 1), 'The correct params were passed to the store');
});
