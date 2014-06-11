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
  route.modelFor = function(name) {
    return new Ember.RSVP.Promise(function(resolve) {
      calls.push(name);
      resolve({localeDictionary: []});
    });
  };
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
  ok(calls.indexOf('admin') !== -1, 'Template was called');
  ok(calls.indexOf('template') !== -1, 'Template was called');
  ok(calls.indexOf('page') !== -1, 'Page was called');
  ok(calls.indexOf('site') !== -1, 'Site was called');
  equal(calledParams[0].site_id, 1, 'The proper site param was called');
});

test('the afterModel sets the global currentSite property as well as persistedLocales', function() {
  var route = this.subject();
  route.set('currentSite', Ember.Object.create());
  var mockModel = {
    site: Ember.Object.create({
      title: 'example',
      availableLocales: ['en', 'fr'],
    }),
    localeDictionary: {en: ['English']}
  };
  route.afterModel(mockModel);
  equal(route.get('currentSite.site.title'), 'example', 'The currentSite was set correctly');
  equal(route.get('currentSite.persistedLocales')[0].id, 'en', 'The persistedLocales id was set correctly');
  equal(route.get('currentSite.persistedLocales')[0].text, 'English', 'The persistedLocales text was set correctly');
});

test('the willTransition callback unsets the currentSite and persistedLocales if no site_id is present in the params object', function() {
  var route = this.subject();
  route.set('currentSite', Ember.Object.create({site: 'test'}));
  route.set('persistedLocales', Ember.Object.create(['en', 'fr']));
  route._clearCurrentSite();
  equal(false, route.get('currentSite.site'));
  equal(false, route.get('currentSite.persistedLocales'));
});