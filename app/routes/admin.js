import AuthenticatedRoute from './authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function() {
    return this.store.find('site');
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
