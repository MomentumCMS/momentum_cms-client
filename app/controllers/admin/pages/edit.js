export default Ember.Controller.extend({

  submitValue: function() {
    if(this.get('isLoading')) {
      return 'Saving...';
    }else{
      return 'Update Page';
    }
  }.property('isLoading')

});