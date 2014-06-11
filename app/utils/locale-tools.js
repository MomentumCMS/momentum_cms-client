export default Ember.Object.extend({

  localeDictionary: false,

  /**
    localeObjects returns a parsed array of localeObjects that is suitable
    for usage within a select dropdown or nav menu. localeObjects returns
    all locales found within the localeDictionary.
  */
  localeObjects: function() {
    if(this.get('localeDictionary') === false) {
      return false;
    }
    var results = [];
    $.each(this.get('localeDictionary'), function(index, item) {
      results.push({id: index, text: item[0]});
    });
    return results;
  },

  /**
    localeObjectsFor returns a filtered array of localeObjects that is
    suitable for usage within a select dropdown or nav menu. It can accept
    a string `localeObjectsFor('en')` or an array `localeObjetsFor(['en', 'fr'])`
  */
  localeObjectsFor: function(ids) {
    if(this.get('localeDictionary') === false) {
      return false;
    }
    var result = [];
    if(typeof ids === 'string' && this.get('localeDictionary')[ids] !== undefined) {
      result.push({id: ids, text: this.get('localeDictionary')[ids][0]});
    }else if(typeof ids === 'object') {
      var _this = this;
      $.each(ids, function(index, id) {
        if(_this.get('localeDictionary')[id] !== undefined) {
          result.push({id: id, text: _this.get('localeDictionary')[id][0]});
        }
      });
    }
    return result;
  }

});