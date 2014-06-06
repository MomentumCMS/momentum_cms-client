import AuthenticatedRoute from '../authenticated';

export default AuthenticatedRoute.extend({

  model: function() {
    return this.modelFor('admin.site');
  },

  afterModel: function(model) {
    this.get('currentSite').set('site', model.site);
  }

});
