import AuthenticatedRoute from '../../authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function() {
    return this.store.createRecord('page');
  },

  //-- Actions --------------------------------------------------------------

  actions: {
    submit: function(e) {
      this._submit(e);
    }
  },

  //-- Private Methods ------------------------------------------------------

  _submit: function() {
    var _this = this;
    var model = this.get('currentModel');
    model.get('errors').clear();
    return model.save().then(function(site) {
      _this.transitionTo('pages.index', site);
    }).catch(function() {
    
    });
  }

});
