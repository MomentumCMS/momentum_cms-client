import AuthenticatedRoute from '../../authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function() {
    var site = this.modelFor('admin.site').site;
    return this.get('store').find('page', {site_id: site.id});
  }

});
