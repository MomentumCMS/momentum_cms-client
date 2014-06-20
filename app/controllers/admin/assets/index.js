import DS from 'ember-data';
export default Ember.Controller.extend({

  uploadParams: {
    site_id: 1
  },

  actions: {

    fileUploaded: function(file) {
      var s = DS.RESTSerializer.create();
      debugger;
      this.store.push('file', file.file);
    },

    deleteFile: function(file) {
      debugger;
    }

  }

});