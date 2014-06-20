export default DS.Model.extend({
  fileContentType: DS.attr('string'),
  fileFileName: DS.attr('string'),
  fileFileSize: DS.attr('integer'),
  host: DS.attr('string'),
  identifier: DS.attr('string'),
  label: DS.attr('string'),
  tag: DS.attr('string'),
  thumb_url: DS.attr('string'),
  url: DS.attr('string'),
  attachableId: DS.attr('integer'),
  attachableType: DS.attr('string'),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  site: DS.belongsTo('site'),
  template: DS.belongsTo('template')
});
