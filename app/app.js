import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

import localeString from './helpers/locale-string';
Ember.Handlebars.registerBoundHelper('locale-for', localeString);

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'momentum-client', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'momentum-client');

export default App;
