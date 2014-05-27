import { test, moduleForModel } from 'ember-qunit';


moduleForModel('template', 'Unit - Template Model', {
  needs: ['model:site', 'model:page']
});


test('it exists', function() {
  ok(this.subject());
});

test('it has the correct attributes', function() {
  var Template = this.subject();
  var attributes = [];
  Template.eachAttribute(function(name, meta) {
    attributes.push(name);
  });
  ok(attributes.indexOf('label') !== -1);
  ok(attributes.indexOf('identifier') !== -1);
  ok(attributes.indexOf('css') !== -1);
  ok(attributes.indexOf('js') !== -1);
  ok(attributes.indexOf('value') !== -1);
  ok(attributes.indexOf('permanentRecord') !== -1);
  ok(attributes.indexOf('adminValue') !== -1);
  ok(attributes.indexOf('createdAt') !== -1);
  ok(attributes.indexOf('updatedAt') !== -1);
});
