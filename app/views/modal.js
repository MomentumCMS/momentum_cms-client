export default Ember.View.extend({

  classNames: ['modal fade'],

  didInsertElement: function() {
    var _this = this;
    this.$().modal();
    this.$().on('hidden.bs.modal', function(e) {
      _this.destroy(e);
    });
  },

  willDestroyElement: function() {
    this.$().modal('hide');
    Ember.$('.modal-backdrop').remove();
  },

  actions: {
    close: function() {
      this.destroy();
    }
  }

});