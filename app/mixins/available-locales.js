import LocaleTools from 'momentum-client/utils/locale-tools';
import ArrayTransform from 'momentum-client/transforms/array';

export default Ember.Mixin.create({

  init: function() {
    this._super();
    this.set('localeTools', LocaleTools.create({localeDictionary: this.get('controllers.admin.model.localeDictionary')}));
    this.set('localeSerializer', ArrayTransform.create());
  },

  availableLocales: function() {
    return this.get('localeTools').localeObjects();
  }.property('controllers.admin.model.localeDictionary'),

  availableDefaultLocales: function() {
    var availableLocales = [];
    if(this.get('model.availableLocales')) {
      // We need to reserialize the selection because it could be a string
      availableLocales = this.get('localeSerializer').serialize(this.get('model.availableLocales'));
    }
    // Reset the models' defaultLocale if there are no availableLocales
    if(availableLocales.length === 0 || availableLocales.indexOf(this.get('model.defaultLocale')) === -1) {
      this.set('model.defaultLocale', null);
    }
    return this.get('localeTools').localeObjectsFor(availableLocales);
  }.property('controllers.admin.model.localeDictionary', 'model.availableLocales')

});