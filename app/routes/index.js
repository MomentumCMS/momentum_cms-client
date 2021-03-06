export default Ember.Route.extend({

  //-- Callbacks ------------------------------------------------------------

  beforeModel: function() {
    this._redirect();
  },

  //-- Private Methods ------------------------------------------------------

  _redirect: function() {
    if(this.get('authentication.loggedIn')) {
      this.transitionTo('admin.dashboard');
    }
  }

});
