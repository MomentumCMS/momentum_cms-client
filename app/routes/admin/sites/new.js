import AuthenticatedRoute from '../../authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function() {
    return this.store.createRecord('site');
  },

  //-- Actions --------------------------------------------------------------

  actions: {
    submit: function(e) {
      this._submit(e);
    },
    willTransition: function() {
      this._cleanup(this.get('currentModel'));
    }
  },

  //-- Private Methods ------------------------------------------------------

  _submit: function() {
    var _this = this;
    var model = this.get('currentModel');
    model.get('errors').clear();
    return model.save().then(function(site) {
      _this.transitionTo('admin.pages.index', site.id);
    }).catch(function() {});
  }

});
