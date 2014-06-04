export default {
  name: 'currentSite',
  initialize: function(container, app) {
    app.register('service:currentSite', Ember.Object, {singleton: true});
    app.inject('route', 'currentSite', 'service:currentSite');
    app.inject('controller', 'currentSite', 'service:currentSite');
    app.inject('adapter', 'currentSite', 'service:currentSite');
  }
};