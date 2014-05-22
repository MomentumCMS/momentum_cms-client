/* globals localStorage */
import { test, moduleFor } from 'ember-qunit';
import mockHttp from '../../helpers/mock-http';
import Authentication from '../../../services/authentication';

moduleFor('service:authentication', 'Unit - AuthenticationService', {
  setup: function() {
    localStorage.clear();
  },
  teardown: function() {
    localStorage.clear();
  }
});

test('it authenticates with an email and password and stores credentials in localStorage', function() {
  mockHttp('/login', 'sessions/create', 200);
  var authentication = Authentication.create();
  expect(5);
  return authentication.authenticate('john.smith@test.com', 'passpass', true).then(function() {
    ok(authentication.get('currentUser'), 'currentUser set');
    equal(authentication.get('currentUser.email'), 'john.smith@test.com', 'currentUser.email matches response');
    equal(authentication.get('token'), 'd11c38b0304ef6dc4dede4aa808283e8', 'currentUser.token matches response');
    var currentUser = JSON.parse(localStorage.currentUser);
    var apiKey = JSON.parse(localStorage.apiKey);
    equal('john.smith@test.com', currentUser.email, 'localStorage is set properly');
    equal('d11c38b0304ef6dc4dede4aa808283e8', apiKey.access_token, 'localStorage is set properly');
  });
});

test('it checks localStorage for user credentials', function() {
  localStorage.currentUser = '{"id":925085493,"email":"john.smith@test.com","role":"student","first_name":"student-first_name","last_name":"student-last_name","full_name":"student-first_name student-last_name","resources_count":1,"api_key":{"id":925085494,"user_id":925085493,"access_token":"d11c38b0304ef6dc4dede4aa808283e8","scope":"api","expired_at":"2014-06-13T17:54:05.218Z","created_at":"2014-05-14T17:54:05.213Z"}}';
  localStorage.apiKey = '{"id":925085494,"user_id":925085493,"access_token":"d11c38b0304ef6dc4dede4aa808283e8","scope":"api","expired_at":"2014-06-13T17:54:05.218Z","created_at":"2014-05-14T17:54:05.213Z"}';
  var authentication = Authentication.create();
  ok(authentication.get('loggedIn'), 'user is logged in');
});

test('logs out users', function() {
  localStorage.currentUser = '{"id":925085493,"email":"john.smith@test.com","role":"student","first_name":"student-first_name","last_name":"student-last_name","full_name":"student-first_name student-last_name","resources_count":1,"api_key":{"id":925085494,"user_id":925085493,"access_token":"d11c38b0304ef6dc4dede4aa808283e8","scope":"api","expired_at":"2014-06-13T17:54:05.218Z","created_at":"2014-05-14T17:54:05.213Z"}}';
  localStorage.apiKey = '{"id":925085494,"user_id":925085493,"access_token":"d11c38b0304ef6dc4dede4aa808283e8","scope":"api","expired_at":"2014-06-13T17:54:05.218Z","created_at":"2014-05-14T17:54:05.213Z"}';
  expect(2);
  var authentication = Authentication.create();
  ok(authentication.get('loggedIn'));
  return authentication.logout().then(function() {
    ok(!authentication.get('loggedIn'));
  });
});

test('it clears session details and errors', function() {
  var authentication = Authentication.create();
  localStorage.currentUser = '{"id":925085493,"email":"john.smith@test.com","role":"student","first_name":"student-first_name","last_name":"student-last_name","full_name":"student-first_name student-last_name","resources_count":1,"api_key":{"id":925085494,"user_id":925085493,"access_token":"d11c38b0304ef6dc4dede4aa808283e8","scope":"api","expired_at":"2014-06-13T17:54:05.218Z","created_at":"2014-05-14T17:54:05.213Z"}}';
  localStorage.apiKey = '{"id":925085494,"user_id":925085493,"access_token":"d11c38b0304ef6dc4dede4aa808283e8","scope":"api","expired_at":"2014-06-13T17:54:05.218Z","created_at":"2014-05-14T17:54:05.213Z"}';
  authentication.set('currentUser', {email: 'john.smith@test.com'});
  authentication.set('token', '12345');
  authentication.set('errorMessage', 'invalid login');
  authentication.set('errors', ['opps']);
  authentication.clear();
  equal(false, authentication.get('currentUser'), 'currentUser was reset');
  equal(false, authentication.get('token'), 'token was reset');
  equal(false, authentication.get('errorMessage'), 'errorMessage was reset');
  equal(false, authentication.get('errors'), 'errors array was reset');
});

test('isAdmin returns true for admins and false for non-admins', function() {
  var authentication = Authentication.create();
  authentication.set('currentUser', {email: 'john.smith@test.com', role: 'admin'});
  authentication.set('token', 'fake');
  ok(authentication.get('isAdmin'));
  authentication.set('currentUser', {email: 'john.smith@test.com', role: 'editor'});
  ok(!authentication.get('isAdmin'));
});