/* globals sinon */
import startApp from '../../../../helpers/start-app';
import { test, moduleFor } from 'ember-qunit';
import mockModel from '../../../../helpers/mock-model';
import Authentication from '../../../../../services/authentication';

var App;

moduleFor('route:admin/pages/new', 'Unit - AdminPagesNewRoute', {
    setup: function() {
      App = startApp();
      var store = App.__container__.lookup('store:main');
      this.subject().set('store', store);
    },
    teardown: function() {}
  }
);

test('it exists', function() {
  ok(this.subject());
});

test('the model callback returns things correctly', function() {
  var route = this.subject();
  route.modelFor = function() {
    return {
      templates: 'template',
      site: 'site'
    };
  };
  Ember.run(function() {
    return route.model().then(function(model) {
      ok(model.templates);
      ok(model.site);
      ok(model.page);
    });
  });
});