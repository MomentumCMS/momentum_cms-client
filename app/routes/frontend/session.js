export default Ember.Route.extend({

  //-- Actions --------------------------------------------------------------

  actions: {
    authenticate: function() {
      this._authenticate();
    },
    logout: function() {
      this._logout();
    }
  },

  //-- Private Methods ------------------------------------------------------

  _authenticate: function() {
    var _this = this;
    var credentials = _this.get('controller.credentials');
    _this.set('controller.isLoading', true);
    var request = this.get('authentication').authenticate(credentials.email, credentials.password, credentials.rememberMe);
    request.then(function() {
      _this.transitionTo('admin.dashboard');
      _this.set('controller.isLoading', false);
    });
    request.catch(function() {
      _this.set('controller.isLoading', false);
    });
    return request;
  },

  _logout: function() {
    var _this = this;
    var request = this.get('authentication').logout();
    request.then(function() {
      _this.transitionTo('login');
    });
    return request;
  }

});
