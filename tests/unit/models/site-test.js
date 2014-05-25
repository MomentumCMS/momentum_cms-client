import { test, moduleForModel } from 'ember-qunit';


moduleForModel('site', 'Unit - Site Model', function() {});


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
  ok(attributes.indexOf('default_locale') !== -1);
  ok(attributes.indexOf('available_locales') !== -1);
  ok(attributes.indexOf('created_at') !== -1);
  ok(attributes.indexOf('updated_at') !== -1);
});