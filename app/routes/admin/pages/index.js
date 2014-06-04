import AuthenticatedRoute from '../../authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function() {
    return this.get('store').all('page');
  }

});
