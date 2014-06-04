/* globals localStorage */
import { test, moduleFor } from 'ember-qunit';
import startApp from '../../helpers/start-app';
var App;

moduleFor('view:easyForm/select2', 'Unit - Select2 View', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {}
});

test('it exists', function() {
  ok(this.subject());
});

test('it initializes a select2', function() {
  var view = this.subject();
  Ember.run(function() {
    view.appendTo(App.rootElement);
  });
  ok($('.select2-container-multi').length > 0, 'The select was initialized');
});

test('it initializes the select2 with the content bound to the element', function() {
  var view = this.subject();
  view.set('content', [{id: 'en', text: 'English'}, {id: 'fr', text: 'French'}]);
  Ember.run(function() {
    view.appendTo(App.rootElement);
  });
  view.$().select2('search', 'Eng');
  setTimeout(function() {
    equal($('.select2-result-label').length, 1, 'The content was set correctly');
  });
});