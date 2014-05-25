/* globals localStorage*/
import ajax from 'ic-ajax';

var Authentication = Ember.Object.extend({

  //-- Properties -----------------------------------------------------------

  currentUser: false,
  token: false,
  errors: [],
  errorMessage: false,

  loggedIn: function() {
    if(this.get('currentUser') && this.get('token')) {
      return true;
    }else{
      return false;
    }
  }.property('currentUser', 'token'),

  isAdmin: function() {
    return (this.get('loggedIn') && this.get('currentUser.role') === 'admin');
  }.property('currentUser.role'),

  role: function() {
    return this.get('currentUser.role');
  }.property('currentUser.role'),

  //-- Methods --------------------------------------------------------------

  init: function() {
    if(localStorage.currentUser && localStorage.apiKey) {
      this.set('currentUser', JSON.parse(localStorage.currentUser));
      this.set('apiKey', JSON.parse(localStorage.apiKey));
      this.set('token', this.get('apiKey.access_token'));
    }
  },

  authenticate: function(email, password, remember_me) {
    localStorage.clear();
    var _this = this;
    var requestData = {session: {email: email, password: password, remember_me: remember_me}};
    var req = ajax({url: Ember.ENV.API_URL + '/sessions', type: 'POST', data: requestData, dataType: 'json'});
    req.then(function(res) {
      _this.set('currentUser', res.user);
      _this.set('token', res.user.api_key.access_token);
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      localStorage.setItem('apiKey', JSON.stringify(res.user.api_key));
      return res;
    });
    req.catch(function(err) {
      var res = JSON.parse(err.jqXHR.responseText);
      _this.set('errorMessage', res.message);
      _this.set('errors', res.errors);
      return res;
    });
    return req;
  },

  addPrefilter: function() {
    var _this = this;
    if(this.get('loggedIn')) {
      $.ajaxPrefilter(function(options, originalOptions, xhr) {
        return xhr.setRequestHeader('AUTHORIZATION', _this.get('token'));
      });
    }
  }.observes('loggedIn').on('init'),

  logout: function() {
    var _this = this;
    var promise = new Ember.RSVP.Promise(function(resolve) {
      _this.clear();
      resolve(true);
    });
    return promise;
  },

  clear: function() {
    localStorage.clear();
    this.set('currentUser', false);
    this.set('token', false);
    this.set('errors', []);
    this.set('errorMessage', false);
  }

});

export default Authentication;