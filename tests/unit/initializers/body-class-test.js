import { test, moduleFor } from 'ember-qunit';
import BodyClassInitializer from '../../../initializers/body_class';

moduleFor('route:application', 'Unit - BodyClassInitializer', {
  setup: function() {
    var cached = Ember.$;
    BodyClassInitializer.initialize();
  }
});

test('it exists', function() {
  ok(this.subject());
});

test('it returns the correct body class', function() {
  var route = this.subject();
  route.set('routeName', 'admin.dashboard');
  equal(route.toCssClass(), 'admin-dashboard', 'the admin-dashboard class was correct');
  route.set('routeName', 'frontend');
  equal(route.toCssClass(), 'frontend', 'the frontend class was correct');
  route.set('routeName', 'admin.sites.pages.index');
  equal(route.toCssClass(), 'admin-sites-pages-index', 'The admin site pages index class was correct');
});

test('the default rootElement is the body', function() {
  var route = this.subject();
  equal(route.get('rootElement'), 'body', 'The root element is the body');
});

test('it adds a body class during activation', function() {
  var route = this.subject();
  route.set('rootElement', '#ember-testing');
  route.set('routeName', 'frontend');
  route.activate();
  ok($('#ember-testing').hasClass('frontend'), 'The class was applied');
});

test('it removes a body class during deactivation', function() {
  var route = this.subject();
  route.set('rootElement', '#ember-testing');
  route.set('routeName', 'frontend');
  route.activate();
  ok($('#ember-testing').hasClass('frontend'), 'The class was applied');
  route.deactivate();
  ok(!$('#ember-testing').hasClass('frontend'), 'The class was removed');
});