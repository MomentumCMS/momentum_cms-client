export default DS.ActiveModelAdapter.extend({
  ajax: function(url, type, hash) {
    var adapter = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      hash = adapter.ajaxOptions(url, type, hash);

      hash.success = function(json) {
        Ember.run(null, resolve, json);
      };

      hash.error = function(jqXHR, textStatus, errorThrown) {
        Ember.run(null, reject, adapter.ajaxError(jqXHR, errorThrown));
      };

      Ember.$.ajax(hash);
    }, "DS: ActiveModelAdapter#ajax " + type + " to " + url);
  },
  ajaxError: function(jqXHR, errorThrown) {
    if (jqXHR && jqXHR.status === 422) {
      var jsonErrors = Ember.$.parseJSON(jqXHR.responseText)["errors"];
      return new DS.InvalidError(jsonErrors);
    } else {
      return errorThrown;
    }
  }
});