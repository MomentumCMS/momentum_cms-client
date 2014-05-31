export default Ember.Route.extend({

  //-- Callbacks ------------------------------------------------------------

  beforeModel: function() {
    this._redirect();
  },

  //-- Private Methods ----------------------------------------------------

  _redirect: function() {
    if(this.get('authentication.loggedIn') !== true) {
      this.transitionTo('session');
    }
  },

  _cleanup: function() {
    var model = this.get('currentModel');
    if(typeof model !== 'undefined' && model.get('isDirty') && model.get('isNew')) {
      model.transitionTo('uncommitted');
      model.deleteRecord();
    }
    return true;
  }

});
