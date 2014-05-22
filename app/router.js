var Router = Ember.Router.extend({
  location: ENV.locationType
});

//-- Base Routes ------------------------------------------------------------
Router.map(function() {
  this.route('session', {path: '/login'});
  this.route('account');
});

export default Router;
