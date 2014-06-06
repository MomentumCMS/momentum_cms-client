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

      this.resource('admin.site', {path: '/:site_id'}, function() {

        this.resource('admin.pages', {path: '/pages'}, function() {
          this.route('index');
          this.route('new');
          this.route('edit', {path: '/:page_id/edit'});
        });

        this.resource('admin.documents', {path: '/documents'}, function() {
          this.route('index');
          this.route('new');
          this.route('edit', {path: '/:document_id/edit'});
        });

        this.resource('admin.templates', {path: '/templates'}, function() {
          this.route('index');
          this.route('new');
          this.route('edit', {path: '/:template_id/edit'});
        });

        this.resource('admin.menus', {path: '/menus'}, function() {
          this.route('index');
          this.route('new');
          this.route('edit', {path: '/:menu_id/edit'});
        });

        this.resource('admin.assets', {path: 'assets'}, function() {
          this.route('index');
        });

        this.route('settings');

      });


    });
  });

});

export default Router;