export default Ember.View.extend({

  didInsertElement: function() {
    this.$('.logo').transition({opacity: 1, y: -40}, 700, 'ease');
  }

});