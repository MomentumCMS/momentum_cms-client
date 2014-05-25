export default {
  name: 'restAdapter',
  initialize: function() {
    DS.ActiveModelAdapter.reopen({
      host: ENV.API_URL
    });
  }
};