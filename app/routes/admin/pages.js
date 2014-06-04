import AuthenticatedRoute from '../authenticated';

export default AuthenticatedRoute.extend({

  model: function(params) {
    var store = this.store;
    return Ember.RSVP.hash({
      templates: store.find('template', {site_id: params.site_id}),
      pages: store.find('page', {site_id: params.site_id}),
      site: store.find('site', params.site_id)
    });
  },

  afterModel: function(model) {
    this.get('currentSite').set('site', model.site);
  }

});
