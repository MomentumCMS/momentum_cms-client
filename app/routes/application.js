export default Ember.Route.extend({

  //-- Actions --------------------------------------------------------------

  actions: {
    logout: function() {
      this._logout();
    }
  },

  //-- Private Methods ------------------------------------------------------

  _logout: function() {
    var _this = this;
    return this.get('authentication').logout().then(function() {
      _this.transitionTo('session');
    });
  }

});