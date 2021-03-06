export default Ember.Route.extend({

  //-- Callbacks ------------------------------------------------------------

  beforeModel: function() {
    this._redirect();
  },

  //-- Private Methods ----------------------------------------------------

  _redirect: function() {
    if(this.get('authentication.loggedIn') !== true) {
      this.transitionTo('frontend.session');
    }
  },

  _cleanup: function(model) {
    if(typeof model !== 'undefined' && model.get('isDirty') && model.get('isNew')) {
      model.transitionTo('uncommitted');
      model.deleteRecord();
    }
    return true;
  }

});
