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
      },
      initSelection: function(element, callback) {
        var data = [];
        var locales = $(element).val().split(',');
        locales = locales.filter(function(item) {return item !== '';});
        $.each(_this.get('content'), function(index, item) {
          if(locales.indexOf(item.id) !== -1) {
            data.push(item);
          }
        });
        callback(data);
      }
    });
  },

  willDestroyElement : function() {
    this.$().select2("destroy");
  }


});