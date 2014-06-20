/* global require, module */
var pickFiles  = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var EmberApp   = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Pull in Font-Awesome's font
// https://github.com/stefanpenner/ember-cli/issues/777
var fontTree = pickFiles('vendor/font-awesome/fonts', {
  srcDir: '/',
  files: ['*'],
  destDir: '/assets'
});

var guideDog = pickFiles('vendor/guidedog', {
  srcDir: '/',
  files: ['guidedog.js', 'lib/*'],
  destDir: '/assets'
});

var plupload = pickFiles('vendor/plupload', {
  srcDir: '/',
  files: ['js/Moxie.swf', 'js/Moxie.xap'],
  destDir: '/assets'
});

// Select2
app.import('vendor/select2/select2.js');
var select2 = pickFiles('vendor/select2', {
  srcDir: '/',
  files: ['select2-spinner.gif', 'select2.png', 'select2x2.png'],
  destDir: '/assets'
});


//-- Legacy File Imports ----------------------------------------------------

app.import({
  development: 'vendor/ember-data/ember-data.js',
  production:  'vendor/ember-data/ember-data.prod.js'
});

app.import({development: 'vendor/plupload/js/moxie.js'});
app.import({
  development: 'vendor/plupload/js/plupload.dev.js',
  production:  'vendor/plupload/js/plupload.full.min.js'
});

app.import({development: 'vendor/jquery-mockjax/jquery.mockjax.js'});
app.import({development: 'vendor/sinon/index.js'});

app.import('vendor/ember-easyForm/index.js');
app.import('vendor/jquery.transit/jquery.transit.js');

// Bootstrap components
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js');


// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

module.exports = mergeTrees([app.toTree(), fontTree, guideDog, select2, plupload]);