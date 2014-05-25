export default {
  name: 'restAdapter',
  initialize: function() {
    DS.RESTAdapter.reopen({
      host: ENV.API_URL
    });
  }
};