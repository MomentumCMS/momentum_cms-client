/* global sinon */
export default Ember.Object.create({
  errors: {
    clear: function() { return true; }
  },
  save: function() {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      resolve(_this);
    });
  },
  deleteRecord: sinon.spy(),
  transitionTo: sinon.spy()
});