import { test, moduleForModel } from 'ember-qunit';


moduleForModel('page', 'Unit - Page Model', {
  needs: ['model:site', 'model:template']
});


test('it exists', function() {
  ok(this.subject());
});

test('it has the correct attributes', function() {
  var Page = this.subject();
  var attributes = [];
  Page.eachAttribute(function(name, meta) {
    attributes.push(name);
  });
  ok(attributes.indexOf('label') !== -1);
  ok(attributes.indexOf('identifier') !== -1);
  ok(attributes.indexOf('slug') !== -1);
});
