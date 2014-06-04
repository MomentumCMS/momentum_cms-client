export default Ember.Controller.extend({

  needs: ['admin'],

  availableLocales: function() {
    var locales = [];
    $.each(this.get('controllers.admin.model.localeDictionary'), function(key, value) {
      locales.push({id: key, text: value[0]});
    });
    return locales;
  }.property('controllers.admin.model.localeDictionary')

});