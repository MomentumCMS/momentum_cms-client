export default Ember.EasyForm.TextField.extend({

  content: null,

  //-- Callbacks ------------------------------------------------------------

  didInsertElement: function() {
    var _this = this;
    this.$().select2({
      multiple: true,
      query: function(query) {
        var data = {results: []};
        $.each(_this.get('content'), function(index, item) {
          if(query.matcher(query.term, item.text)) {
            data.results.push(item);
          }
        });
        query.callback(data);
      }
    });
  },

  willDestroyElement : function() {
    this.$().select2("destroy");
  }


});