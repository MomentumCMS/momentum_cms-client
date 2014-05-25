var Router = Ember.Router.extend({
  location: ENV.locationType
});

//-- Base Routes ------------------------------------------------------------
Router.map(function() {
  this.route('session', {path: '/login'});

  this.resource('admin', function() {
    this.route('account');
    this.route('dashboard');
    this.resource('admin.sites', {path: 'sites'}, function() {
      this.route('new');
    });
  });

});

export default Router;