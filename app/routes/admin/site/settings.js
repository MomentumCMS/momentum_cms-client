import AuthenticatedRoute from 'momentum-client/routes/authenticated';
import LocaleTools from 'momentum-client/utils/locale-tools';

export default AuthenticatedRoute.extend({

  submitValue: 'Save',

  model: function() {
    return this.modelFor('admin.site').site;
  },

  //-- Actions --------------------------------------------------------------

  actions: {
    submit: function(e) {
      this._update(e);
    },
    delete: function(e) {
      this._delete(e);
    },
    willTransition: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  },

  //-- Private Methods ------------------------------------------------------

  _update: function() {
    var _this = this;
    var model = this.get('currentModel');
    this.set('controller.submitValue', 'Saving...');
    var localeTools = LocaleTools.create({localeDictionary: this.modelFor('admin').localeDictionary});
    return model.save().then(function(model) {
      _this.set('controller.submitValue', 'Save');
      _this.set('currentSite.persistedLocales', localeTools.localeObjectsFor(model.get('availableLocales')));
    }, function() {
      // catch
    });
  },

  _delete: function() {
    var _this = this;
    var model = this.get('currentModel');
    model.deleteRecord();
    return model.save().then(function() {
      _this.transitionTo('admin.dashboard');
    });
  }

});