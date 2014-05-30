import { test, moduleForModel } from 'ember-qunit';


moduleForModel('site', 'Unit - Site Model', {
  needs: ['model:page']
});


test('it exists', function() {
  ok(this.subject());
});

test('it has the correct attributes', function() {
  var Site = this.subject();
  var attributes = [];
  Site.eachAttribute(function(name, meta) {
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
  var Site = this.subject();
  equal((typeof Site.get('randomAvatar')), 'string', 'a string was returned');
  equal(Site.get('randomAvatar').match(/avatar/).length, 1, 'A matching item was returned');
});