import { test, moduleFor } from 'ember-qunit';
import localeTools from 'momentum-client/utils/locale-tools';

module('Unit - LocaleTools');

test('it exists', function() {
  ok(localeTools);
});

test('it returns false if the localeDictionary is not set', function() {
  var tools = localeTools.create();
  ok(!tools.localeObjectsFor('en'), 'It returned false');
});

test('it returns an array of a single locale object when provided a string', function() {
  var tools = localeTools.create({
    localeDictionary: {
      'en': ['English'],
      'fr': ['French'],
      'es': ['Spanish']
    }
  });
  var result = tools.localeObjectsFor('en')[0];
  equal(result.id, 'en', 'The id was returned properly');
  equal(result.text, 'English', 'The text was returned properly');
});

test('it returns an array of locale objects when provided an array', function() {
  var tools = localeTools.create({
    localeDictionary: {
      'en': ['English'],
      'fr': ['French'],
      'es': ['Spanish']
    }
  });
  var results = tools.localeObjectsFor(['en', 'fr', 'es']);
  ok(results.length > 0, 'An array of objects was passed back');
  equal(results[0].id, 'en', 'The first result id was correct');
  equal(results[0].text, 'English', 'The first result id was correct');
  equal(results[1].id, 'fr', 'The second result id was correct');
  equal(results[1].text, 'French', 'The second result id was correct');
  equal(results[2].id, 'es', 'The third result id was correct');
  equal(results[2].text, 'Spanish', 'The third result id was correct');
});

test('it does not return objects for keys that do not exist in the localeDictionary', function() {
  var tools = localeTools.create({
    localeDictionary: {
      'mm': ['Momentum']
    }
  });
  var results = tools.localeObjectsFor('en');
  equal(0, results.length, 'It returned an empty array');
  results = tools.localeObjectsFor(['en', 'fr', 'es']);
  equal(0, results.length, 'An empty array was returned');
});

test('it returns false if anything other than a string or array is passed in', function() {
  var tools = localeTools.create({
    localeDictionary: {
      'en': ['English']
    }
  });
  equal(false, tools.localeObjectsFor(undefined), 'False was correctly returned');
  equal(false, tools.localeObjectsFor(1), 'False was correctly returned');
  equal(false, tools.localeObjectsFor(false), 'False was correctly returned');
});

test('localeObjects returns an array of all locales available within the dictionary', function() {
  var tools = localeTools.create({
    localeDictionary: {
      'en': ['English'],
      'fr': ['French']
    }
  });
  var results = tools.localeObjects();
  equal('en', results[0].id, 'The first id was set correctly');
  equal('English', results[0].text, 'The first text was set correctly');
  equal('fr', results[1].id, 'The second id was set correctly');
  equal('French', results[1].text, 'The second text was set correctly');
});