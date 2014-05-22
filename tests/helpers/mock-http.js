export default function mockHttp(url, fixture, status) {
  $.mockjaxSettings.contentType = 'application/json';
  Ember.$.mockjax({
    url: url,
    dataType: 'json',
    contentType: 'application/json',
    proxy: '/' + fixture + '.json',
    status: status || 200
  });
}