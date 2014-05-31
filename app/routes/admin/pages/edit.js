import AuthenticatedRoute from '../../authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function(params) {
    return this.get('store').find('page', params.page_id);
  },

  //-- Actions --------------------------------------------------------------

  actions: {
    submit: function() {
      this._submit();
    }
  },

  //-- Methods --------------------------------------------------------------

  _submit: function() {
    var model = this.get('currentModel');
    model.get('errors').clear();
    return model.save().then(function() {
    }).catch(function() {});
  }

});
