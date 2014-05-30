import AuthenticatedRoute from '../authenticated';

export default AuthenticatedRoute.extend({

  model: function(params) {
    return this.get('store').find('page', {site_id: params.site_id});
  }

});
