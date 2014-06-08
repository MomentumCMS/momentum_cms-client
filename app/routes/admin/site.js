import AuthenticatedRoute from '../authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function(params) {
    var store = this.store;
    return Ember.RSVP.hash({
      templates: store.find('template', {site_id: params.site_id}),
      pages: store.find('page', {site_id: params.site_id}),
      site: store.find('site', params.site_id),
      localeDictionary: this.modelFor('admin').localeDictionary
    });
  },

  afterModel: function(model) {
    this.get('currentSite').setProperties({
      'site': model.site,
      'persistedLocales': model.site.get('availableLocales')
    });
  },

  //-- Actions --------------------------------------------------------------

  actions: {
    willTransition: function() {
      this._clearCurrentSite();
      return true;
    }
  },

  //-- Private Methods ------------------------------------------------------

  _clearCurrentSite: function() {
    if(this.paramsFor('admin.site') === undefined || this.paramsFor('admin.site').site_id === undefined) {
      this.set('currentSite.site', false);
      this.set('currentSite.persistedLocales', false);
    }
  }

});