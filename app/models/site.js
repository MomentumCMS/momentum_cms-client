export default DS.Model.extend({
  title: DS.attr(),
  label: DS.attr(),
  identifier: DS.attr(),
  host: DS.attr(),
  default_locale: DS.attr(),
  available_locales: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr()
});