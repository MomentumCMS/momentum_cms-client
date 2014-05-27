export default DS.Model.extend({
  title: DS.attr('string'),
  label: DS.attr('string'),
  identifier: DS.attr('string'),
  host: DS.attr('string'),
  defaultLocale: DS.attr(),
  availableLocales: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});