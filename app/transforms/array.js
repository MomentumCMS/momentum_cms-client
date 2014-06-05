export default DS.Transform.extend({
  deserialize: function(serialized) {
    var type = Ember.typeOf(serialized);
    if (type === 'array') {
      return serialized;
    } else {
      return [];
    }
  },
  serialize: function(deserialized) {
    var type = Ember.typeOf(deserialized);
    if (type === 'array') {
      return deserialized;
    } else if (type === 'string') {
      return deserialized.split(',').map(function(item) {
        return $.trim(item);
      });
    } else {
      return [];
    }
  }
});