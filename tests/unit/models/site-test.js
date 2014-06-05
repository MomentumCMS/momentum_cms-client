import { test, moduleForModel } from 'ember-qunit';
import arrayTransform from 'momentum-client/transforms/array';

moduleForModel('site', 'Unit - Site Model', {
  needs: ['model:page', 'transform:array']
});


//  function(container, context) {
//   var mockStore = new DS.Store();
//   container.register('store:main', DS.Store, {singleton: true});
// });


test('it exists', function() {
  ok(this.subject());
});

test('it has the correct attributes', function() {
  var site = this.subject();
  var attributes = [];
  site.eachAttribute(function(name, meta) {
    attributes.push(name);
  });
  ok(attributes.indexOf('title') !== -1);
  ok(attributes.indexOf('label') !== -1);
  ok(attributes.indexOf('identifier') !== -1);
  ok(attributes.indexOf('host') !== -1);
  ok(attributes.indexOf('defaultLocale') !== -1);
  ok(attributes.indexOf('availableLocales') !== -1);
  ok(attributes.indexOf('createdAt') !== -1);
  ok(attributes.indexOf('updatedAt') !== -1);
});

test('it returns a random avatar', function() {
  var site = this.subject();
  equal((typeof site.get('randomAvatar')), 'string', 'a string was returned');
  equal(site.get('randomAvatar').match(/avatar/).length, 1, 'A matching item was returned');
});