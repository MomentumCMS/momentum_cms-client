import AuthenticatedRoute from '../../authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function(params) {
    var store = this.store;
    return Ember.RSVP.hash({
      template: store.find('template', params.template_id),
      templates: this.modelFor('admin.site').templates
    });
  },

  //-- Actions --------------------------------------------------------------

  actions: {
    submit: function() {
      this._submit();
    },
    deleteRecord: function(model) {
      this._destroyTemplate(model);
    }
  },

  //-- Methods --------------------------------------------------------------

  _submit: function() {
    var model = this.get('currentModel').template;
    model.get('errors').clear();
    return model.save().then(function() {
    }).catch(function() {});
  },

  _destroyTemplate: function(model) {
    var _this = this;
    model.deleteRecord();
    return model.save().then(function() {
      _this.transitionTo('admin.templates.index');
    });
  }

});
