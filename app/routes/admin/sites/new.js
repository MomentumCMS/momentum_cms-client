import AuthenticatedRoute from '../../authenticated';

export default AuthenticatedRoute.extend({

  //-- Callbacks ------------------------------------------------------------

  model: function() {
    return this.store.createRecord('site');
  },

  //-- Actions --------------------------------------------------------------

  actions: {
    submit: function() {
      this._saveRecord();
    }
  },

  //-- Private Methods ------------------------------------------------------

  _saveRecord: function() {
    var request = this.currentModel.save();
    return request;
  }

});
