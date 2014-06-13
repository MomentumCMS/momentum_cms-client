import AuthenticatedRoute from 'momentum-client/routes/authenticated';

export default AuthenticatedRoute.extend({

  //-- Properties -----------------------------------------------------------

  site: function() {
    return this.get('currentSite.site');
  }.property('currentSite.site'),

  //-- Callbacks ------------------------------------------------------------

  model: function() {
    return new Ember.RSVP.hash({
      sites: this.get('store').find('site'),
      templates: this.get('store').find('template'),
      localeDictionary: $.getJSON(ENV.API_URL + '/locales')
    });
  },

  afterModel: function() {
    this._noSitesRedirect();
  },

  //-- Private Methods ------------------------------------------------------

  _noSitesRedirect: function() {
    var sites = this.store.all('site');
    if(sites.get('length') === 0) {
      this.transitionTo('admin.sites.new');
    }
  }

});
