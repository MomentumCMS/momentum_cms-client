var Router = Ember.Router.extend({
  location: ENV.locationType
});

//-- Base Routes ------------------------------------------------------------
Router.map(function() {

  this.resource('frontend', {path: '/'}, function() {
    this.route('session', {path: '/login'});
  });

  this.resource('admin', function() {
    this.route('account');
    this.route('dashboard');
    this.resource('admin.sites', {path: 'sites'}, function() {
      this.route('new');
      this.resource('admin.pages', {path: '/:site_id/pages'}, function() {
        this.route('index');
        this.route('new');
        this.route('edit', {path: '/:page_id/edit'});
      });
    });
  });

});

export default Router;