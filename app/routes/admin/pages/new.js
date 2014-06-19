import AuthenticatedRoute from '../../authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      page: store.createRecord('page'),
      templates: this.modelFor('admin.site').templates,
      site: this.modelFor('admin.site').site
    });
  },

  //-- Actions --------------------------------------------------------------

  actions: {
    submit: function(e) {
      this._submit(e);
    },
    willTransition: function() {
      this._cleanup(this.get('currentModel').page);
    }
  },

  //-- Private Methods ------------------------------------------------------

  _submit: function() {
    var _this = this;
    var model = this.get('currentModel.page');
    model.set('site', this.get('currentModel.site'));
    model.get('errors').clear();
    return model.save().then(function() {
      _this.transitionTo('admin.pages.index');
    }).catch(function() {});
  }

});
