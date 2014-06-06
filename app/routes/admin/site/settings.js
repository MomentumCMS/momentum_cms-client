import AuthenticatedRoute from 'momentum-client/routes/authenticated';

export default AuthenticatedRoute.extend({

  model: function() {
    return this.modelFor('admin.site').site;
  }

});