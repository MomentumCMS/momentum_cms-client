export default DS.Model.extend({
  label: DS.attr('string'),
  identifier: DS.attr('string'),
  permanentRecord: DS.attr('string'),
  css: DS.attr('string'),
  js: DS.attr('string'),
  value: DS.attr('string'),
  adminValue: DS.attr('string'),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  site: DS.belongsTo('site')
});