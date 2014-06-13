export default Ember.Route.extend({

  //-- Actions --------------------------------------------------------------

  actions: {
    logout: function() {
      this._logout();
    },
    openModal: function(modalName) {
      this._openModal(modalName);
    }
  },

  //-- Private Methods ------------------------------------------------------

  _logout: function() {
    var _this = this;
    return this.get('authentication').logout().then(function() {
      _this.transitionTo('frontend.session');
    });
  },

  _openModal: function(modalName) {
    this.render('modal', {
      into: 'application',
      outlet: 'modal'
    });
    this.render(modalName, {
      into: 'modal'
    });
  }

});