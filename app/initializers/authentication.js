import Authentication from '../services/authentication';

export default {
  name: 'authentication',
  initialize: function(container, app) {
    app.register('service:authentication', Authentication, {singleton: true});
    app.inject('route', 'authentication', 'service:authentication');
    app.inject('controller', 'authentication', 'service:authentication');
    app.inject('adapter', 'authentication', 'service:authentication');
  }
};