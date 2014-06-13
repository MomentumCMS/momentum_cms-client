export default Ember.EasyForm.Select.extend({

  /**
    This is a frusterating hack, but I cannot seem to find a simple way around
    it. In the instance that you bind your select <option>'s dynamically from
    a model's attribute - Ember will rerender the options after the model is
    updated, which removes the selected=selected attribute, resetting the
    selection. As a work around, I've added a delayed callback that sets
    the selection manually using jQuery.
  */
  setSelectedOption: function() {
    var _this = this;
    Ember.run.later(function() {
      var element = _this.$('option[value="' + _this.get('value') + '"]');
      if(typeof element !== 'undefined' && element.length > 0) {
        element.attr('selected', 'selected');
      }
    });
  }.observes('context.model.availableLocales')

});