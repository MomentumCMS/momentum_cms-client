export default function mockHttp(url, responseObject, status) {
  $.mockjaxSettings.contentType = 'application/json';
  Ember.$.mockjax({
    url: url,
    dataType: 'json',
    contentType: 'application/json',
    responseText: responseObject,
    status: status || 200
  });
}