export default DS.Model.extend({
  identifier: DS.attr('string'),
  label: DS.attr('string'),
  slug: DS.attr('string'),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  belongsTo: DS.belongsTo('site')
});