import arrayTransform from 'momentum-client/transforms/array';

export default {
  name: 'registerTransforms',
  initialize: function(container, app) {
    app.register('transform:array', arrayTransform);
  }
};