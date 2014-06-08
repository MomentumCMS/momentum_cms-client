import AuthenticatedRoute from 'momentum-client/routes/authenticated';

export default AuthenticatedRoute.extend({

  submitValue: 'Save',

  model: function() {
    return this.modelFor('admin.site').site;
  },

  //-- Actions --------------------------------------------------------------

  actions: {
    submit: function(e) {
      this._update(e);
    }
  },

  //-- Private Methods ------------------------------------------------------

  _update: function() {
    var _this = this;
    var model = this.get('currentModel');
    this.get('controller').set('submitValue', 'Saving...');
    return model.save().then(function(model) {
      _this.get('controller').set('submitValue', 'Save');
      _this.set('currentSite.persistedLocales', model.get('availableLocales'));
    }, function() {
      // catch
    });
  }


});